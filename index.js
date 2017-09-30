import express from "express";
import request from "request";
import bodyParser from "body-parser";
import rp from "request-promise";
import {art_data} from "./data/art_data";
import {faq_helpers} from "./data/faq_helpers";
import {card_questions} from "./data/card_questions";
import {visit} from "./data/visit_questions";
import https from "https";
import moment from "moment";
import Chance from "chance";
var chance = new Chance();

var scraper = require('insta-scraper');

setInterval(() => {
  https.get("https://pacific-lake-62804.herokuapp.com/");
}, 900000 );

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 5000));

// Server index page
app.get("/", function (req, res) {
  request({
    url: "https://www.instagram.com/p/" + "BZfo9ezhsMW",
    qs: {
      __a: 1,
    },
    method: "GET"
  }, function(error, response, body) {
    let json = JSON.parse(body);
    let main = json["graphql"]["shortcode_media"];
    res.send(main["owner"]["username"]);
  });
});

// Facebook Webhook
// Used for verification
app.get("/webhook", function (req, res) {
  if (req.query["hub.verify_token"] === process.env.VERIFICATION_TOKEN) {
    console.log("Verified webhook");
    res.status(200).send(req.query["hub.challenge"]);
  } else {
    console.error("Verification failed. The tokens do not match.");
    res.sendStatus(403);
  }
});

// All callbacks for Messenger will be POST-ed here
app.post("/webhook", function (req, res) {
  // Make sure this is a page subscription
  if (req.body.object == "page") {
    // Iterate over each entry
    // There may be multiple entries if batched
    req.body.entry.forEach(function(entry) {
      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.postback) {
          processPostback(event);
        } 
        else if (event.message) {
        	processMessage(event);
        }
      });
    });

    res.sendStatus(200);
  }
});

function processPostback(event) {
  let senderId = event.sender.id;
  let payload = event.postback.payload;

  if (payload === "Greeting") {
    // Get user's first name from the User Profile API
    // and include it in the greeting
    request({
      url: "https://graph.facebook.com/v2.6/" + senderId,
      qs: {
        access_token: process.env.PAGE_ACCESS_TOKEN,
        fields: "first_name"
      },
      method: "GET"
    }, function(error, response, body) {
      let greeting = "";
      if (error) {
        console.log("Error getting user's name: " +  error);
      } else {
        let bodyObj = JSON.parse(body);
        let name = bodyObj.first_name;
        sendMessage(senderId, generateWelcomeMessage(name));
      }
    });
  }
  else {
    let schema = JSON.parse(payload);

    if (schema.category == "art_data") {
      sendMessage(senderId, art_data[schema.branch]);
    }
    else if (schema.category == "instagram_impressions") {
      // INSTAGRAM API integration here
      scraper.getMediaByTag("catsdrinkingmilk", "", function(error,response_json){
        let media = response_json["media"]["nodes"];
        let list = [];
        media.forEach(picture => {
          let item = {
            display_src: picture["display_src"],
            code: picture["code"],
            caption: picture["caption"],
            owner_id: picture["owner"]["id"],
          }
          list.push(item);
        });
        list.sort(function(a,b) {
          let id_a = a.display_src.replace("https://scontent-sin6-1.cdninstagram.com/t51.2885-15/e35/","");
          let id_b = b.display_src.replace("https://scontent-sin6-1.cdninstagram.com/t51.2885-15/e35/","");

          id_a = parseInt(id_a.substring(0,8));
          id_b = parseInt(id_b.substring(0,8));

          return id_b - id_a;
        });
        
        let messages = [{text: "Here are the top 10 newest instagram posts. Tag your photos with #coloursofimpressionism to see your photos here!"}];
        let carouselItems = [];
        for (let i=0;i<10;i++) {
          let obj = {
            image_url: list[i].display_src,
            title: list[i].caption,
            default_action: {
              type: "web_url",
              url: "https://www.instagram.com/p/" + list[i].code + "/",
            }
          };
          carouselItems.push(obj);
        }
        let carousel = {
          attachment: {
            type: "template",
            payload: {
              template_type: "generic",
              image_aspect_ratio: "square",
              elements: carouselItems
            }
          }
        }
        messages.push(carousel);
        messages.push({
          text: "Alternatively, you can try one of our other options.",
          quick_replies: [
            {
              content_type:"text",
              title: "🎨 Art",
              payload: JSON.stringify({
                category: "art_data",
                branch: "ART_START"
              }),
            },
            {
              content_type:"text",
              title: "📷 Instagrammables",
              payload: JSON.stringify({
                category: "instagram_impressions",
                branch: "instagram_impressions"
              }),
            },
            {
              content_type:"text",
              title: "🖼 Visit",
              payload: JSON.stringify({
                category: "visit",
                branch: "visit_start"
              }),
            }
          ]
        });  
        sendMessage(senderId, messages);
      });
    }
    else if (schema.category == "visit") {
      if (schema.branch == "visit_tickets") {
        sendMessage(senderId, visit[schema.branch])
      }
      else if (schema.branch == "visit_opening_hours"){
        let timeNow = new moment().add(8,'hours');
        sendMessage(senderId, [{text: getOpeningHourMessage(timeNow)}]);
      }
      else {
        sendMessage(senderId, visit[schema.branch]);
      }
    }
  }
}

function processMessage(event) {
    if (!event.message.is_echo) {
        var message = event.message;
        var senderId = event.sender.id;

        // You may get a text or attachment but not both
        if (message.quick_reply) {
          let schema = JSON.parse(message.quick_reply.payload);

          if (schema.category == "art_data") {
            sendMessage(senderId, art_data[schema.branch]);
          }

          else if (schema.category == "pick_a_card") {
            let message = [{text: "Look at the painting in front of you."}];
            let choice = chance.integer({min: 0, max: card_questions.length-1});
            let quick_reply = [
              {
                content_type:"text",
                title: "🎨 Art",
                payload: JSON.stringify({
                  category: "art_data",
                  branch: "ART_START"
                }),
              },
              {
                content_type:"text",
                title: "📷 Instagrammables",
                payload: JSON.stringify({
                  category: "instagram_impressions",
                  branch: "instagram_impressions"
                }),
              },
              {
                content_type:"text",
                title: "🖼 Visit",
                payload: JSON.stringify({
                  category: "visit",
                  branch: "visit_start"
                }),
              }
            ];
            message.push({text: card_questions[choice], quick_replies: quick_reply});
            sendMessage(senderId, message);
          }

          else if (schema.category == "instagram_impressions") {
            scraper.getMediaByTag("catsdrinkingmilk", "", function(error,response_json){
              let media = response_json["media"]["nodes"];
              let list = [];
              media.forEach(picture => {
                let item = {
                  display_src: picture["display_src"],
                  code: picture["code"],
                  caption: picture["caption"],
                  owner_id: picture["owner"]["id"],
                }
                list.push(item);
              });
              list.sort(function(a,b) {
                let id_a = a.display_src.replace("https://scontent-sin6-1.cdninstagram.com/t51.2885-15/e35/","");
                let id_b = b.display_src.replace("https://scontent-sin6-1.cdninstagram.com/t51.2885-15/e35/","");

                id_a = parseInt(id_a.substring(0,8));
                id_b = parseInt(id_b.substring(0,8));

                return id_b - id_a;
              });
              
              let messages = [{text: "Here are the top 10 newest instagram posts. Tag your photos with #coloursofimpressionism to see your photos here!"}];
              let carouselItems = [];
              for (let i=0;i<10;i++) {
                let obj = {
                  image_url: list[i].display_src,
                  title: list[i].caption,
                  default_action: {
                    type: "web_url",
                    url: "https://www.instagram.com/p/" + list[i].code + "/",
                  }
                };
                carouselItems.push(obj);
              }
              let carousel = {
                attachment: {
                  type: "template",
                  payload: {
                    template_type: "generic",
                    image_aspect_ratio: "square",
                    elements: carouselItems
                  }
                }
              }
              messages.push(carousel);
              messages.push({
                text: "Alternatively, you can try one of our other options.",
                quick_replies: [
                  {
                    content_type:"text",
                    title: "🎨 Art",
                    payload: JSON.stringify({
                      category: "art_data",
                      branch: "ART_START"
                    }),
                  },
                  {
                    content_type:"text",
                    title: "📷 Instagrammables",
                    payload: JSON.stringify({
                      category: "instagram_impressions",
                      branch: "instagram_impressions"
                    }),
                  },
                  {
                    content_type:"text",
                    title: "🖼 Visit",
                    payload: JSON.stringify({
                      category: "visit",
                      branch: "visit_start"
                    }),
                  }
                ]
              });  
              sendMessage(senderId, messages);
            });
          }

          else if (schema.category == "visit") {
            if (schema.branch == "visit_tickets") {
              sendMessage(senderId, visit[schema.branch])
            }
            else if (schema.branch == "visit_opening_hours"){
              let timeNow = new moment().add(8,'hours');
              sendMessage(senderId, [{text: getOpeningHourMessage(timeNow)}]);
            }
            else {
              sendMessage(senderId, visit[schema.branch]);
            }
          }

          else if (schema.category == "faq_helpers") {
            if (schema.branch == "NEXT_TOUR") {
              let timeNow = new moment().add(8,'hours'); // offset the timezone difference on server and SG
              if (timeNow.hours() < 14) {
                sendMessage(senderId, faq_helpers["NEXT_TOUR_AVAILABLE"]);
              }
              else {
                sendMessage(senderId, faq_helpers["NEXT_TOUR_UNAVAILABLE"]);
              }
            }
            else {
              sendMessage(senderId, faq_helpers[schema.branch]);
            }
          }          
        }

        else if (message.text) {
        	// If user were to restart the conversation
          let prompts = ["hello","hi","yo","what up","hey","hey there","get started"];
          let potentialStart = message.text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
          if (prompts.indexOf(potentialStart) != -1) {
            // Get user's first name from the User Profile API
            // and include it in the greeting
            request({
              url: "https://graph.facebook.com/v2.6/" + senderId,
              qs: {
                access_token: process.env.PAGE_ACCESS_TOKEN,
                fields: "first_name"
              },
              method: "GET"
            }, function(error, response, body) {
              let greeting = "";
              if (error) {
                console.log("Error getting user's name: " +  error);
              } else {
                let bodyObj = JSON.parse(body);
                let name = bodyObj.first_name;
                sendMessage(senderId, generateWelcomeMessage(name));
              }
            });            
          }
          else {
            sendMessage(senderId, [{text: "Sorry, I don't understand your request."}]);
          }
          
        } else if (message.attachments) {
            sendMessage(senderId, [{text: "Sorry, I don't understand your request."}]);
        }
    }
}

// sends messages to user
var sendMessage = (recipientId, messages, index=0) => {
  if (index < messages.length) {
    request({
      url: "https://graph.facebook.com/v2.6/me/messages",
      qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
      method: "POST",
      json: {
        recipient: {id: recipientId},
        message: messages[index]
      }
    }, (error, response, body) => {
      if (error) {
        console.log("Error sending message: " + response.error);
      }
      sendMessage(recipientId,messages,index+1);
    });
  }
  else {
    return;
  }  
}

const generateWelcomeMessage = (name) => {
  let messages = [];
  messages.push({
    text: "Hi " + name + "! Welcome to National Gallery Singapore!"
  });
  messages.push({
    text: "I'm your virtual assistant to the Colours of Impressionism exhibition. 🤖 Would you like to find out about our key highlights?"
  });
  messages.push({
    text: "Select an option to begin.",
    quick_replies: [
      {
        content_type:"text",
        title: "🎨 Art",
        payload: JSON.stringify({
          category: "art_data",
          branch: "ART_START"
        }),
      },
      {
        content_type:"text",
        title: "📷 Instagrammables",
        payload: JSON.stringify({
          category: "instagram_impressions",
          branch: "instagram_impressions"
        }),
      },
      {
        content_type:"text",
        title: "🖼 Visit",
        payload: JSON.stringify({
          category: "visit",
          branch: "visit_start"
        }),
      }
    ]
  });  
  return messages;
}

/*
  Returns top 10 most recent public instagram pictures with the hashtag specified 
*/
const getInstagramPosts = (hashtag) => {
  scraper.getMediaByTag("catsdrinkingmilk", "", function(error,response_json){
    let media = response_json["media"]["nodes"];
    let url_list = [];
    media.forEach(picture => {
      url_list.push(picture["display_src"]);
    });
    url_list.sort(function(a,b) {
      let id_a = a.replace("https://scontent-sin6-1.cdninstagram.com/t51.2885-15/e35/","");
      let id_b = b.replace("https://scontent-sin6-1.cdninstagram.com/t51.2885-15/e35/","");

      id_a = parseInt(id_a.substring(0,8));
      id_b = parseInt(id_b.substring(0,8));

      return id_b - id_a;
    });
    return url_list;
  });
}

/*
  Returns the relevant opening hour message
*/
const getOpeningHourMessage = (timeNow) => {
  let closingHour = (timeNow.day() == 5 || timeNow.day()) ? 22 : 19;
  let openingHour = 10;
  let hourNow = timeNow.hour();
  let text;

  if (hourNow < openingHour || hourNow > closingHour) {
    let timeToOpening = (hourNow < openingHour) ? (openingHour - hourNow) : (10 + (24-hourNow));
    text = "Oh no! We're closed for the day, " + timeToOpening + " more hours to opening.";
  }  

  else {
    if (closingHour - hourNow < 2) {
      text = "We’re closing soon! Visit us again. This exhibition ends 11 March 2018.";
    }
    else {
      let hoursLeft = closingHour - hourNow;
      text = hoursLeft + " more hours of art before the Gallery closes!";
    }
  }

  return text;
}
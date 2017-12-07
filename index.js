import express from "express";
import request from "request";
import bodyParser from "body-parser";
import rp from "request-promise";
import {art_data} from "./data/art_data";
import {faq_helpers} from "./data/faq_helpers";
import {card_questions, card_answers} from "./data/card_questions";
import {visit} from "./data/visit_questions";
import {updateQuestion1, updateQuestion2} from "./mongoMethod";
import {getReply} from "./data/common_words_helpers";
import https from "https";
import moment from "moment";
import Chance from "chance";
var chance = new Chance();
var scraper = require('insta-scraper');


// stops server from sleeping by pinging every 17min
setInterval(() => {
  https.get("https://pacific-lake-62804.herokuapp.com/");
}, 17 * 60 * 1000 );

// start express
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 5000));

// global variable to keep track of card number
var cardNumber = 0;

// Server index page
app.get("/", function (req, res) {
  res.send("Hello");
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
      if (entry.messaging) {
        // Iterate over each messaging event
        entry.messaging.forEach(function(event) {
          if (event.postback) {
            processPostback(event);
          } 
          else if (event.message) {
            processMessage(event);
          }
        });
      }
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
        startSurvey(senderId);
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
      scraper.getMediaByTag("centuryoflight", "", function(error,response_json){
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
        
        let messages = [{text: "Here are the most recent Instagram posts on Between Worlds and Colours of Impressionism, two exhibitions that are part of the Century of Light series. Tag your posts with #CenturyofLight to see your photos here!"}];
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
          text: "Looking for something else? Choose another option below.",
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
              title: "📷 #CenturyofLight",
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
        sendMessage(senderId, [
          {
            text: "Colours of Impressionism opens from 10am to 7pm from Saturday to Thursday, and 10am to 9pm on Friday. "
          },
          {
            text: getOpeningHourMessage(timeNow),
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
                title: "📷 #CenturyofLight",
                payload: JSON.stringify({
                  category: "instagram_impressions",
                  branch: "instagram_impressions"
                }),
              },
              {
                content_type:"text",
                title: "🎟 Tickets",
                payload: JSON.stringify({
                  category: "visit",
                  branch: "visit_tickets"
                }),
              },
            ]
          },
        ]);
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
            if (schema.branch == "pick_a_card_start") {
              console.log("card number: " + cardNumber);
              sendMessage(senderId, [card_questions[cardNumber]]);
              cardNumber += 1;
              if (cardNumber > 9) {
                cardNumber = cardNumber % 10;
              }
            }
            else {
              let answer = [card_answers[schema.branch]];
              sendMessage(senderId, answer, 3000);
              let answer2 = [
              {
                text: "Looking for something else? Choose another option below.",
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
                    title: "📷 #CenturyofLight",
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
              }];
              sendMessage(senderId, answer2, 5000);
            }           
          }

          else if (schema.category == "instagram_impressions") {
            scraper.getMediaByTag("centuryoflight", "", function(error,response_json){
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
              
              let messages = [{text: "Here are the most recent Instagram posts on Between Worlds and Colours of Impressionism, two exhibitions that are part of the Century of Light series. Tag your posts with #CenturyofLight to see your photos here!"}];
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
                text: "Looking for something else? Choose another option below.",
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
                    title: "📷 #CenturyofLight",
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
              let message = [             
                {
                  text: getOpeningHourMessage(timeNow),
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
                      title: "📷 #CenturyofLight",
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
                }
              ];
              sendMessage(senderId, message);
            }
            else {
              sendMessage(senderId, visit[schema.branch]);
            }
          }

          else if (schema.category == "faq_helpers") {
            if (schema.branch == "NEXT_TOUR") {
              let timeNow = new moment().add(8,'hours'); // offset the timezone difference on server and SG
              if (timeNow.hours() < 13) {
                let messages = faq_helpers["NEXT_TOUR_AVAILABLE"];
                messages = messages.concat(art_data["ART_START"]);
                sendMessage(senderId, messages);
              }
              else {
                let messages = faq_helpers["NEXT_TOUR_UNAVAILABLE"];
                messages = messages.concat(art_data["ART_START"]);
                sendMessage(senderId, messages);
              }
            }
            else {
              let messages = faq_helpers[schema.branch];
              messages = messages.concat(art_data["ART_START"]);
              sendMessage(senderId, messages);
            }
          }          

          else if (schema.category == "survey") {
            if (schema.branch == "question_1") {
              updateQuestion1(schema.choice);
              sendMessage(senderId, [{
                text: "Which feature would be most useful to you?",
                quick_replies: [
                  {
                    content_type: "text",
                    title: "Artwork information",
                    payload: JSON.stringify({
                      category: "survey",
                      branch: "question_2",
                      choice: "artwork_information"
                    }),
                  },
                  {
                    content_type: "text",
                    title: "Things to see and do",
                    payload: JSON.stringify({
                      category: "survey",
                      branch: "question_2",
                      choice: "things_to_see_and_do"
                    }),
                  },
                  {
                    content_type: "text",
                    title: "Buy tickets",
                    payload: JSON.stringify({
                      category: "survey",
                      branch: "question_2",
                      choice: "buy_tickets"
                    }),
                  },
                  {
                    content_type: "text",
                    title: "Get directions",
                    payload: JSON.stringify({
                      category: "survey",
                      branch: "question_2",
                      choice: "get_directions"
                    }),
                  },
                  {
                    content_type: "text",
                    title: "Register for events",
                    payload: JSON.stringify({
                      category: "survey",
                      branch: "question_2",
                      choice: "register_for_events"
                    }),
                  },
                  {
                    content_type: "text",
                    title: "Promos",
                    payload: JSON.stringify({
                      category: "survey",
                      branch: "question_2",
                      choice: "promos"
                    }),
                  },     
                  {
                    content_type: "text",
                    title: "Games",
                    payload: JSON.stringify({
                      category: "survey",
                      branch: "question_2",
                      choice: "games"
                    }),
                  },              
                ]
              }]);
            }
            else if (schema.branch == "question_2") {
              updateQuestion2(schema.choice);
              sendMessage(senderId, [
                {
                  text: "Thank you for your feedback! ☺️"
                },
                {
                  text: "Shall we continue with the fun stuff?",
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
                      title: "📷 #CenturyofLight",
                      payload: JSON.stringify({
                        category: "instagram_impressions",
                        branch: "instagram_impressions"
                      }),
                    },
                    {
                      content_type:"text",
                      title: "🎟 Tickets",
                      payload: JSON.stringify({
                        category: "visit",
                        branch: "visit_tickets"
                      }),
                    },
                  ]
                }
              ]);
            }
          }

          else if (schema.category == "wrong_words") {
            sendMessage(senderId, [{
              text: "Looking for something else? Choose another option below.",
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
                  title: "📷 #CenturyofLight",
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
            }]);
          }
        }

        else if (message.text) {
        	// If user were to restart the conversation
          let prompts = ["hello","hi","yo","what up","hey","hey there","get started"];
          let potentialStart = message.text.toLowerCase().replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
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
            let sentence = message.text.toLowerCase().replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
            sendMessage(senderId, getReply(sentence));
          }
          
        } else if (message.attachments) {
            sendMessage(senderId, getUnhandledRequest());
        }
    }
}

// sends messages to user
var sendMessage = (recipientId, messages, delay=2000, index=0) => {
  if (messages === undefined || !messages) {
    return;
  }
  if (index < messages.length) {
    request({
      url: "https://graph.facebook.com/v2.6/me/messages",
      qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
      method: "POST",
      json: {
        recipient: {id: recipientId},
        sender_action: "typing_on" // typing display
      }
    }, (error, response, body) => {
      if (error) {
        console.log("Error sending message: " + response.error);      
      }
      setTimeout(() => {         
        request({
          url: "https://graph.facebook.com/v2.6/me/messages",
          qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
          method: "POST",
          json: {
            recipient: {id: recipientId},
            message: messages[index], // send message
          }
        }, (error, response, body) => {
          if (error) {
            console.log("Error sending message: " + response.error);
          }
          sendMessage(recipientId,messages,delay,index+1); // send next message
        }); 
      }, delay); // set 1300ms delay on reply
    });
  }
  else {
    return;
  }  
}

const generateWelcomeMessage = (name) => {
  let messages = [];
  messages.push({
    text: "Hi " + name + "! Welcome to National Gallery Singapore! I'm your virtual assistant 🤖 to Colours of Impressionism. \
This exhibition is part of Century of Light, a showcase of art from the 19th century that brings together two exhibitions — Between Worlds and Colours of Impressionism."
  });
  messages.push({
    text: "Would you like to learn about artworks, discover what other people have posted on Instagram, or find out about ticketing and opening hours to prepare for your visit? Tap one of the options below.",
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
        title: "📷 #CenturyofLight",
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
  Message to be returned in the case of un-programmed input from user
*/
const getUnhandledRequest = () => {
  let message = [
    {
      text: "Please don’t play these games with my heart."
    },
    {
      text: "Can you try one of these?",
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
          title: "📷 #CenturyofLight",
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
    }
  ];
  return message;
}

/*
  Returns the relevant opening hour message
*/
const getOpeningHourMessage = (timeNow) => {
  let closingHour = (timeNow.day() == 5 ) ? 21 : 19;
  let openingHour = 10;
  let hourNow = timeNow.hour();
  let text;

  if (hourNow < openingHour || hourNow >= closingHour) {
    let timeToOpening = (hourNow < openingHour) ? (openingHour - hourNow) : (10 + (24-hourNow));
    text = "Oh no! We're closed for the day, " + timeToOpening + " more hours to opening. Visit Colours of Impressionism again from 10am to 7pm from Saturday to Thursday, and 10am to 9pm on Friday. This exhibition ends 11 March 2018.";
  }  

  else {
    if (closingHour - hourNow < 2) {
      text = "We’re closing soon at " + (closingHour-12) +  "pm! Visit Colours of Impressionism again from 10am to 7pm from Saturday to Thursday, and 10am to 9pm on Friday. This exhibition ends 11 March 2018.";
    }
    else {
      let hoursLeft = closingHour - hourNow;
      text = "Colours of Impressionism opens from 10am to 7pm from Saturday to Thursday, and 10am to 9pm on Friday. "
       + hoursLeft + " more hours of art before we close for the day! This exhibition ends 11 March 2018.";
    }
  }

  return text;
}

const startSurvey = (senderId) => {
  setTimeout(() => {
    sendMessage(senderId, [{
      text: "I'm still a bot-in-training at the moment. Would you like to see an upgraded version with more features in future? ☺️",
      quick_replies: [
        {
          content_type: "text",
          title: "✔️ Yes",
          payload: JSON.stringify({
            category: "survey",
            branch: "question_1",
            choice: "yes"
          }),
        },
        {
          content_type: "text",
          title: "❌ No",
          payload: JSON.stringify({
            category: "survey",
            branch: "question_1",
            choice: "no"
          }),
        }
      ]
    }]);
  }, 15*60*1000); // to be changed for production  
}
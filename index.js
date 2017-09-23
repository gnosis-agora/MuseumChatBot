import express from "express";
import request from "request";
import bodyParser from "body-parser";
import rp from "request-promise";
import {art_data} from "./data/art_data";
import {faq_helpers} from "./data/faq_helpers";
import https from "https";

setInterval(() => {
  https.get("https://pacific-lake-62804.herokuapp.com/");
}, 300000);

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 5000));

// Server index page
app.get("/", function (req, res) {
  res.send(JSON.stringify(art_data));
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
    console.log(req);
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
        greeting = "Hi " + name + ". ";
      }
      let message = greeting + "My name is Cura and I'll be your virtual tour guide for today. Click on any one of the themes below to get started!";
      let quick_reply_buttons = [
      	{
      		content_type:"text",
      		title: "History",
      		payload:"START",
      	},
      	{
      		content_type:"text",
      		title: "Expression",
      		payload:"START",
      	},
      	{
      		content_type:"text",
      		title: "Politics",
      		payload:"START",
      	},
      	{
      		content_type:"text",
      		title: "Influences",
      		payload:"START",
      	}
      ]
      sendMessage(senderId, [{text: message, quick_replies: quick_reply_buttons}]);
    });
  }
  else {
    let schema = JSON.parse(payload);

    if (schema.category == "art_data") {
      sendMessage(senderId, art_data[schema.branch]);
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
      console.log(body);
      sendMessage(recipientId,messages,index+1);
    });
  }
  else {
    return;
  }  
}

function processMessage(event) {
    if (!event.message.is_echo) {
        var message = event.message;
        var senderId = event.sender.id;

        // You may get a text or attachment but not both
        if (message.quick_reply) {
          let schema = JSON.parse(message.quick_reply.payload);

          if (schema.category == "faq_helpers") {
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
        	// deal with all cases here
          sendMessage(senderId, [{text: "Sorry, I don't understand your request."}]);
        } else if (message.attachments) {
            sendMessage(senderId, [{text: "Sorry, I don't understand your request."}]);
        }
    }
}
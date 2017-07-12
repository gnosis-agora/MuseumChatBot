// var express = require("express");
// var request = require("request");
// var bodyParser = require("body-parser");

import express from "express";
import request from "request";
import bodyParser from "body-parser";
import expression_data from "./data/expression/script";

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 5000));

// Server index page
app.get("/", function (req, res) {
  res.send(JSON.stringify(expression_data));
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
        name = bodyObj.first_name;
        greeting = "Hi " + name + ". ";
      }
      let message = greeting + "My name is Cura and I'll be your virtual tour guide for today. Click on any one of the themes below to get started!";
      let quick_reply_buttons = [
      	{
      		content_type:"text",
      		title: "History",
      		payload:"HISTORY_START",
      	},
      	{
      		content_type:"text",
      		title: "Expression",
      		payload:"EXPRESSION_START",
      	},
      	{
      		content_type:"text",
      		title: "Politics",
      		payload:"POLITICS_START",
      	},
      	{
      		content_type:"text",
      		title: "Influences",
      		payload:"INFLUENCES_START",
      	}
      ]
      sendMessage(senderId, {text: message, quick_replies: quick_reply_buttons});
    });
  }
  else if (payload.indexOf("START") !== -1) {
  	// if they click on any of the themes in the persistent menu
  	switch (payload) {
  		case "HISTORY_START":
  			sendMessage(senderId, {text: "you've selected history"});
  			break;
  		case "EXPRESSION_START":
  			sendMessage(senderId, expression_data.START);
  			break;
  		case "POLITICS_START":
  			sendMessage(senderId, {text: "you've selected politics"});
  			break;
  		case "INFLUENCES_START":
  			sendMessage(senderId, {text: "you've selected influences"});
  			break;			
  		default:
  			// should not reach here
  			sendMessage(senderId, {text: "sorry, that is an invalid choice"});
  	}
  }
  else if (payload.indexOf("EXPRESSION") !== -1) {
  	switch (payload){
  		case "EXPRESSION_ARTWORK1_PART_1":
  			sendMessage(senderId, expression_data.EXPRESSION_ARTWORK1_PART_1);
  			break;
  		case "EXPRESSION_ARTWORK2_PART_1":
  			sendMessage(senderId, {text: "sorry, this option is under construction"});
  			break;
  		case "EXPRESSION_ARTWORK3_PART_1":
  			sendMessage(senderId, {text: "sorry, this option is under construction"});
  			break;
  	}  
  }
}

// sends message to user
function sendMessage(recipientId, message) {
  request({
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
    method: "POST",
    json: {
      recipient: {id: recipientId},
      message: message
    }
  }, function(error, response, body) {
    if (error) {
      console.log("Error sending message: " + response.error);
    }
  });
}

function processMessage(event) {
    if (!event.message.is_echo) {
        var message = event.message;
        var senderId = event.sender.id;

        console.log("Received message from senderId: " + senderId);
        console.log("Message is: " + JSON.stringify(message));

        // You may get a text or attachment but not both
        if (message.text) {
        	// deal with all cases here
        	if (expression_data[message.quick_reply.payload] !== undefined) {
        		sendMessage(senderId, expression_data[message.quick_reply.payload]);
        	}

        } else if (message.attachments) {
            sendMessage(senderId, {text: "Sorry, I don't understand your request."});
        }
    }
}
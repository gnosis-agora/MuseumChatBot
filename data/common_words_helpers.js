import {art_data} from "./art_data";
import {visit} from "./visit_questions";
import moment from "moment"
var scraper = require('insta-scraper');

export const getReply = (wordsArray) => {
	let artPrompt = ["art", "artwork", "painting", "featured", "highlight", "artist", "recommended", "artworks", "paintings"];
	let instagramPrompt = ["social", "media", "instagram", "coloursofimpressionism", "photo", "photos"];
	let openingHourPrompt = ["opening", "open", "close", "time", "hours", "hour", "closing"];
	let ticketsPrompt = ["how", "much", "price", "ticket", "discount", "concession", "free", "admission", "entry", "tickets",];

	if (containsCommonWord(wordsArray, artPrompt)) {
		return [
      {
        text: "Looking for the key highlights of this exhibition?",
        quick_replies: [
          {
            content_type: "text",
            title: "Yes",
            payload: JSON.stringify({
              category: "art_data",
              branch: "ART_START"
            }),
          },
          {
            content_type: "text",
            title: "No",
            payload: JSON.stringify({
              category: "wrong_words",
              branch: "NO"
            }),
          }
        ]
      }
    ];
	}
	else if (containsCommonWord(wordsArray, instagramPrompt)) {
    return [
      {
        text: "Looking for the latest Instagram posts on this exhibition?",
        quick_replies: [
          {
            content_type: "text",
            title: "Yes",
            payload: JSON.stringify({
              category: "instagram_impressions",
              branch: "instagram_impressions"
            }),
          },
          {
            content_type: "text",
            title: "No",
            payload: JSON.stringify({
              category: "wrong_words",
              branch: "NO"
            }),
          }
        ]
      }
    ];
	}
	else if (containsCommonWord(wordsArray, openingHourPrompt)) {
    return [
      {
        text: "Looking for information on our opening hours?",
        quick_replies: [
          {
            content_type: "text",
            title: "Yes",
            payload: JSON.stringify({
              category: "visit",
              branch: "visit_opening_hours"
            }),
          },
          {
            content_type: "text",
            title: "No",
            payload: JSON.stringify({
              category: "wrong_words",
              branch: "NO"
            }),
          }
        ]
      }
    ];	
	}
	else if (containsCommonWord(wordsArray, ticketsPrompt)) {
    return [
      {
        text: "Looking for information on ticket prices?",
        quick_replies: [
          {
            content_type: "text",
            title: "Yes",
            payload: JSON.stringify({
              category: "visit",
              branch: "visit_tickets"
            }),
          },
          {
            content_type: "text",
            title: "No",
            payload: JSON.stringify({
              category: "wrong_words",
              branch: "NO"
            }),
          }
        ]
      }
    ];
	}
	else {
		return getUnhandledRequest();
	}
}

/*
  Returns true if sentence (array of words) contains any of the match_words
*/
const containsCommonWord = (sentence, match_words) => {
  let common = sentence.filter((n) => match_words.includes(n));
  return common.length !== 0
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
          title: "📷 Instagram",
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
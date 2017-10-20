import {art_data} from "./art_data";
import {visit} from "./visit_questions";
import moment from "moment"
var scraper = require('insta-scraper');

export const getReply = (wordsArray) => {
	let artPrompt = ["art", "artwork", "painting", "featured", "highlight", "artist", "recommended", "artworks"];
	let instagramPrompt = ["social media", "instagram", "coloursofimpressionism", "photo", "photos"];
	let openingHourPrompt = ["opening hours", "open", "close", "time", "opening hour"];
	let ticketsPrompt = ["how much", "price", "ticket", "discount", "concession", "free", "admission", "entry", "tickets",];

	if (containsCommonWord(wordsArray, artPrompt)) {
		return art_data["ART_START"];
	}
	else if (containsCommonWord(wordsArray, instagramPrompt)) {
    scraper.getMediaByTag("nationalgallerysg", "", function(error,response_json){
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
      
      let messages = [{text: "Here are the top 10 newest Instagram posts. Tag your photos with #coloursofimpressionism to see your photos here!"}];
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
      });  
      return messages;
    });	
	}
	else if (containsCommonWord(wordsArray, openingHourPrompt)) {
	  let timeNow = new moment().add(8,'hours');

	  return [
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
            title: "📷 Instagram",
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
    ];		
	}
	else if (containsCommonWord(wordsArray, ticketsPrompt)) {
		return visit["visit_tickets"];
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
  let message = {
    text: "What would you like to know?",
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
  };
  return [message];
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
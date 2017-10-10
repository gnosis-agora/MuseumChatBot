export const faq_helpers = {
  AUDIO_GUIDE: [
    {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "Learn more about this artist and artwork on our Gallery Explorer app. It’s free!",
          buttons: [
            {
              type: "web_url",
              url: "https://goo.gl/ytAmxN",
              title: "🤖 Android users"
            },
            {
              type: "web_url",
              url: "https://appsto.re/sg/VaJ76.i",
              title: "🍎 iOS users"
            }
          ]
        }
      }
    },
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
  ],

  NEXT_TOUR_AVAILABLE: [
    {
      text: "The next docent tour is at 2pm. Head over to the Tours Desk at Level B1 to register.",
    },
    {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "If you can’t wait, a self-guided tour is just a few taps away. Download our free Gallery Explorer app now.",
          buttons: [
            {
              type: "web_url",
              url: "https://goo.gl/ytAmxN",
              title: "🤖 Android users"
            },
            {
              type: "web_url",
              url: "https://appsto.re/sg/VaJ76.i",
              title: "🍎 iOS users"
            }
          ]
        }
      }
    },
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
  ],

  NEXT_TOUR_UNAVAILABLE: [
    {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "Oops! There are no more docent tours today. Let our Gallery Explorer app lead the way.",
          buttons: [
            {
              type: "web_url",
              url: "https://goo.gl/ytAmxN",
              title: "🤖 Android users"
            },
            {
              type: "web_url",
              url: "https://appsto.re/sg/VaJ76.i",
              title: "🍎 iOS users"
            }
          ]
        }
      }
    },
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
            branch: "visit"
          }),
        }
      ]
    }
  ]

}
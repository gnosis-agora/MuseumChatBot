
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
              title: "🤖 Android"
            },
            {
              type: "web_url",
              url: "https://appsto.re/sg/VaJ76.i",
              title: "🍎 iOS"
            }
          ]
        }
      }
    }
  ],

  NEXT_TOUR_AVAILABLE_1: [
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
              title: "🤖 Android"
            },
            {
              type: "web_url",
              url: "https://appsto.re/sg/VaJ76.i",
              title: "🍎 iOS"
            }
          ]
        }
      }
    }
  ],

  NEXT_TOUR_AVAILABLE_2: [
    {
      text: "The next docent tour is at 4pm and 4.30pm for the Mandarin tour. Head over to the Tours Desk at Level B1 to register.",
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
              title: "🤖 Android"
            },
            {
              type: "web_url",
              url: "https://appsto.re/sg/VaJ76.i",
              title: "🍎 iOS"
            }
          ]
        }
      }
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
              title: "🤖 Android"
            },
            {
              type: "web_url",
              url: "https://appsto.re/sg/VaJ76.i",
              title: "🍎 iOS"
            }
          ]
        }
      }
    }
  ]

}
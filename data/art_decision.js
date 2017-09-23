export const art_data = {
  ART_START: [
    // Insert some kind of intro here.
    {
      text: "Here are some of our must-sees:"
    },
    {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Clair de lune sur le port de Boulogne (Moonlight over the Port of Boulogne)",
              subtitle: "Édouard Manet\nPhoto © RMN-Grand Palais (musée d’Orsay) / Hervé Lewandowski",
              image_url: "http://i.imgur.com/sj7QjSU.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: "ARTWORK_1",
                }
              ]
            },
            {
              title: "La serveuse de bocks",
              subtitle: "Édouard Manet\nPhoto © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt",
              image_url: "http://i.imgur.com/sj7QjSU.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: "ARTWORK_2",
                }
              ]
            },         
          ]
        }
      }    
    }
  ],

  ARTWORK_1: [
    {
      text: "Manet’s friend and fellow painter Alfred Stevens kept this painting in his Paris studio for a few years."
    },
    {
      text: "Paul Durand-Ruel discovered it there and loved it so much that he bought 20 works by Manet 😱"
    },
    {
      text: "Durand-Ruel ended up becoming the main art dealer for Manet and other Impressionist artists!",
      quick_replies: [
        {
          content_type: "text",
          title: "🖼 Next Artwork",
          payload: "ARTWORK_2",
        },
        {
          content_type: "text",
          title: "🎧 Audio guide",
          payload: "AUDIO_GUIDE",          
        },
        {
          content_type: "text",
          title: "🙋 Next tour timing",
          payload: "NEXT_TOUR",            
        }
      ]
    }
  ]
}
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
              title: "Generic image 2",
              image_url: "http://i.imgur.com/lZKq2uA.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: "EXPRESSION_ARTWORK2_PART_1"
                }
              ]
            },
            {
              title: "Generic image 3",
              image_url: "http://i.imgur.com/ykVgu6G.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: "EXPRESSION_ARTWORK3_PART_1"
                }
              ]
            },          
          ]
        }
      }    
    }
  ],
}
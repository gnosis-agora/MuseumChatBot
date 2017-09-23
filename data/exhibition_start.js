export const exhibition_start = {
  exhibition_start: [
    // Insert some kind of intro here.
    {
      text: "This is a pilot project. We’re working on a super cool futuristic bot. Vote for an exhibition that you would like to see on this bot!"
    },
    {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Exhibition 1",
              subtitle: "Exhibition info here",
              image_url: "http://i.imgur.com/sj7QjSU.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Vote for this",
                  payload: JSON.stringify({
                    category: "art_data",
                    branch: "exhibition_1"
                  }),
                }
              ]
            },
            
          ]
        }
      }    
    }
  ],
}
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
          image_aspect_ratio: "square",
          elements: [
            {
              // artwork 1
              title: "Clair de lune sur le port de Boulogne (Moonlight over the Port of Boulogne)",
              subtitle: "Édouard Manet\nPhoto © RMN-Grand Palais (musée d’Orsay) / Hervé Lewandowski",
              image_url: "https://i.imgur.com/xOquuHP.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: JSON.stringify({
                    category: "art_data",
                    branch: "ARTWORK_1"
                  }),
                }
              ]
            },
            {
              // artwork 2
              title: "La serveuse de bocks",
              subtitle: "Édouard Manet\nPhoto © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt",
              image_url: "https://i.imgur.com/pI1wiGI.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: JSON.stringify({
                    category: "art_data",
                    branch: "ARTWORK_2"
                  }),
                }
              ]
            },
            {
              // artwork 3
              title: "La Pie",
              subtitle: "Claude Manet\nPhoto © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt",
              image_url: "https://i.imgur.com/9sLS7M6.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: JSON.stringify({
                    category: "art_data",
                    branch: "ARTWORK_3"
                  }),
                }
              ]              
            },
            {
              // artwork 4
              title: "Le berceau",
              subtitle: "Berthe Morisot\nPhoto © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt",
              image_url: "https://i.imgur.com/DHD4if0.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: JSON.stringify({
                    category: "art_data",
                    branch: "ARTWORK_4"
                  }),
                }
              ]              
            },
            {
              // artwork 5
              title: "Claude Monet",
              subtitle: "Pierre-Auguste Renoir\nPhoto © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt",
              image_url: "https://i.imgur.com/5SnEoQr.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: JSON.stringify({
                    category: "art_data",
                    branch: "ARTWORK_5"
                  }),
                }
              ]                 
            },
            {
              // artwork 6
              title: "Le bassin aux nymphéas, harmonie rose",
              subtitle: "Claude Monet\nPhoto © RMN-Grand Palais (musée d’Orsay) / Hervé Lewandowski",
              image_url: "https://i.imgur.com/63EV6OO.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: JSON.stringify({
                    category: "art_data",
                    branch: "ARTWORK_6"
                  }),
                }
              ]                  
            },
            {
              // artwork 7
              title: "Le golfe de Marseille vu de l’Estaque",
              subtitle: "Paul Cézanne\nPhoto © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt",
              image_url: "https://i.imgur.com/vJBZm0A.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: JSON.stringify({
                    category: "art_data",
                    branch: "ARTWORK_7"
                  }),
                }
              ]                 
            },
            {
              // artwork 8
              title: "La bouée rouge (The Red Buoy)",
              subtitle: "Paul Signac\nPhoto © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt",
              image_url: "https://i.imgur.com/I2ZIT5i.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: JSON.stringify({
                    category: "art_data",
                    branch: "ARTWORK_8"
                  }),
                }
              ]                               
            },
            {
              // artwork 9
              title: "La cathédrale de Rouen. Le portail et la tour Saint-Romain, plein soleil",
              subtitle: "Claude Monet\nPhoto © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt",
              image_url: "https://i.imgur.com/P8jlw7U.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: JSON.stringify({
                    category: "art_data",
                    branch: "ARTWORK_9"
                  }),
                }
              ]
            },
            {
              // artwork 10
              title: "Gabrielle à la rose",
              subtitle: "Pierre-Auguste Renoir\nPhoto © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt",
              image_url: "https://i.imgur.com/vkJCadI.jpg",
              buttons: [
                {
                  type: "postback",
                  title: "Learn more",
                  payload: JSON.stringify({
                    category: "art_data",
                    branch: "ARTWORK_10"
                  }),
                }
              ]              
            }
          ]
        }
      }    
    }
  ],

  ARTWORK_1: [
    {
      attachment: {
        type: "image",
        payload: {
          attachment_id: "1909261475994900"
        }
      }
    },
    {
      text: "Artwork title: Clair de lune sur le port de Boulogne (Moonlight over the Port of Boulogne)\n\n\
Artist: Édouard Manet\n\nCredits: © RMN-Grand Palais (musée d’Orsay) / Hervé Lewandowski"
    },
    {
      text: "Manet’s friend and fellow painter Alfred Stevens kept this painting in his Paris studio for a few years. \
Paul Durand-Ruel discovered it there and loved it so much that he bought 20 works by Manet 😱"
    },
    {
      text: "Durand-Ruel ended up becoming the main art dealer for Manet and other Impressionist artists!",
      quick_replies: [
        {
          content_type: "text",
          title: "🖼 Next Artwork",
          payload: JSON.stringify({
            category: "art_data",
            branch: "ARTWORK_2"
          }),
        },
        {
          content_type: "text",
          title: "🎧 Audio guide",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "AUDIO_GUIDE"
          }),          
        },
        {
          content_type: "text",
          title: "🙋 Next tour timing",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        }
      ]
    }
  ],

  ARTWORK_2: [
    {
      attachment: {
        type: "image",
        payload: {
          attachment_id: "1909265825994465"
        }
      }
    },
    {
      text: "Artwork title: La serveuse de bocks\n\n\
Artist: Édouard Manet\n\nCredits: © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt"
    },
    {
      text: "In case you’re wondering what the French title says, it means “The Waitress of Beers!” 💁🍻",
      quick_replies: [
        {
          content_type: "text",
          title: "🖼 Next Artwork",
          payload: JSON.stringify({
            category: "art_data",
            branch: "ARTWORK_3"
          }),
        },
        {
          content_type: "text",
          title: "🎧 Audio guide",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "AUDIO_GUIDE"
          }),          
        },
        {
          content_type: "text",
          title: "🙋 Next tour timing",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        }
      ]
    }
  ],

  ARTWORK_3: [
    {
      attachment: {
        type: "image",
        payload: {
          attachment_id: "1909266012661113"
        }
      }
    },
    {
      text: "Artwork title: La Pie\n\n\
Artist: Claude Manet\n\nCredits: © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt"
    },
    {
      text: "Did you know that the white snow in this painting is actually made of dabs of blue, pink and yellow as well?",
      quick_replies: [
        {
          content_type: "text",
          title: "🖼 Next Artwork",
          payload: JSON.stringify({
            category: "art_data",
            branch: "ARTWORK_4"
          }),
        },
        {
          content_type: "text",
          title: "🎧 Audio guide",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "AUDIO_GUIDE"
          }),          
        },
        {
          content_type: "text",
          title: "🙋 Next tour timing",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        }
      ]
    }
  ],

  ARTWORK_4: [
    {
      attachment: {
        type: "image",
        payload: {
          attachment_id: "1909266129327768"
        }
      }
    },
    {
      text: "Artwork title: Le berceau\n\n\
Artist: Berthe Morisot\n\nCredits: © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt"
    },
    {
      text: "Morisot led a double life of sorts! She loved painting, but when visitors came over,\
 she would hide her paintings and present herself as a fancy high society lady 👩‍🎨➡👸",
      quick_replies: [
        {
          content_type: "text",
          title: "🖼 Next Artwork",
          payload: JSON.stringify({
            category: "art_data",
            branch: "ARTWORK_5"
          }),
        },
        {
          content_type: "text",
          title: "🎧 Audio guide",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "AUDIO_GUIDE"
          }),          
        },
        {
          content_type: "text",
          title: "🙋 Next tour timing",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        }
      ]
    }
  ],

  ARTWORK_5: [
    {
      attachment: {
        type: "image",
        payload: {
          attachment_id: "1909266285994419"
        }
      }
    },
    {
      text: "Artwork title: Claude Monet\n\n\
Artist: Pierre-Auguste Renoir\n\nCredits: © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt"
    },
    {
      text: "Can you guess what Monet is painting and how the artwork looks based on his palette?\
 As Monet rarely painted figures indoors, some people think that he may have been working on La Japonaise\
 (Camille Monet in Japanese Costume).",
      quick_replies: [
        {
          content_type: "text",
          title: "🖼 Next Artwork",
          payload: JSON.stringify({
            category: "art_data",
            branch: "ARTWORK_6"
          }),
        },
        {
          content_type: "text",
          title: "🎧 Audio guide",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "AUDIO_GUIDE"
          }),          
        },
        {
          content_type: "text",
          title: "🙋 Next tour timing",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        }
      ]
    }
  ],

  ARTWORK_6: [
    {
      attachment: {
        type: "image",
        payload: {
          attachment_id: "1909266592661055"
        }
      }
    },
    {
      text: "Artwork title: CLe bassin aux nymphéas, harmonie rose\n\n\
Artist: Claude Monet\n\nCredits: © RMN-Grand Palais (musée d’Orsay) / Hervé Lewandowski"
    },
    {
      text: "Monet was an avid botanist. He once said, “My garden is my most beautiful masterpiece.”🌾🌿🍀🌲",
      quick_replies: [
        {
          content_type: "text",
          title: "🖼 Next Artwork",
          payload: JSON.stringify({
            category: "art_data",
            branch: "ARTWORK_7"
          }),
        },
        {
          content_type: "text",
          title: "🎧 Audio guide",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "AUDIO_GUIDE"
          }),          
        },
        {
          content_type: "text",
          title: "🙋 Next tour timing",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        }
      ]
    }
  ],

  ARTWORK_7: [
    {
      attachment: {
        type: "image",
        payload: {
          attachment_id: "1909266652661049"
        }
      }
    },
    {
      text: "Artwork title: Le golfe de Marseille vu de l’Estaque\n\n\
Artist: Paul Cézanne\n\nCredits: © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt"
    },
    {
      text: "L’Estaque was a Mediterranean fishing village that Cézanne escaped to when family life got a\
 little too complicated. It inspired some of his grandest landscape paintings.",
      quick_replies: [
        {
          content_type: "text",
          title: "🖼 Next Artwork",
          payload: JSON.stringify({
            category: "art_data",
            branch: "ARTWORK_8"
          }),
        },
        {
          content_type: "text",
          title: "🎧 Audio guide",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "AUDIO_GUIDE"
          }),          
        },
        {
          content_type: "text",
          title: "🙋 Next tour timing",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        }
      ]
    }
  ],

  ARTWORK_8: [
    {
      attachment: {
        type: "image",
        payload: {
          attachment_id: "1909267332660981"
        }
      }
    },
    {
      text: "Artwork title: La bouée rouge (The Red Buoy)\n\n\
Artist: Paul Signac\n\nCredits: © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt"
    },
    {
      text: "Signac was an enthusiastic sailor who painted landscapes across the coasts of Europe. In 2010,\
 a hotel by a lake in the Netherlands, Hotel Spaander, discovered one of his works, which Signac supposedly used to pay for his stay. ⛵",
      quick_replies: [
        {
          content_type: "text",
          title: "🖼 Next Artwork",
          payload: JSON.stringify({
            category: "art_data",
            branch: "ARTWORK_9"
          }),
        },
        {
          content_type: "text",
          title: "🎧 Audio guide",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "AUDIO_GUIDE"
          }),          
        },
        {
          content_type: "text",
          title: "🙋 Next tour timing",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        }
      ]
    }
  ],

  ARTWORK_9: [
    {
      attachment: {
        type: "image",
        payload: {
          attachment_id: "1909267442660970"
        }
      }
    },
    {
      text: "Artwork title: La Cathedrale de Rouen. Le portail et la tour Saint-Romain, plein soleil\n\n\
Artist: Claude Monet\n\nCredits: © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt"
    },
    {
      text: "Monet painted over 30 Rouen Cathedral paintings to capture the light that changed from day to day.\
 He had vivid nightmares of the cathedral, in various hues of pinks, blues and yellows, falling on him.✨",
      quick_replies: [
        {
          content_type: "text",
          title: "🖼 Next Artwork",
          payload: JSON.stringify({
            category: "art_data",
            branch: "ARTWORK_10"
          }),
        },
        {
          content_type: "text",
          title: "🎧 Audio guide",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "AUDIO_GUIDE"
          }),          
        },
        {
          content_type: "text",
          title: "🙋 Next tour timing",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        }
      ]
    }
  ],  

  ARTWORK_10: [
    {
      attachment: {
        type: "image",
        payload: {
          attachment_id: "1909267662660948"
        }
      }
    },
    {
      text: "Artwork title: Gabrielle a la rose\n\n\
Artist: Pierre-Auguste Renoir\n\nCredits: © Musée d'Orsay, Dist. RMN-Grand Palais / Patrice Schmidt"
    },
    {
      text: "Gabrielle was a cousin of Renoir’s wife.\
 Apart from babysitting the young Renoir children, she also often posed half-clothed or nude for Renoir’s paintings 🙈",
      quick_replies: [
        {
          content_type: "text",
          title: "🖼 Next Artwork",
          payload: JSON.stringify({
            category: "art_data",
            branch: "ARTWORK_1"
          }),
        },
        {
          content_type: "text",
          title: "🎧 Audio guide",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "AUDIO_GUIDE"
          }),          
        },
        {
          content_type: "text",
          title: "🙋 Next tour timing",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        }
      ]
    }
  ],  
}
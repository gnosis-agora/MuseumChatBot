"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var art_data = exports.art_data = {
  ART_START: [
  // Insert some kind of intro here.
  {
    text: "Here are our key highlights!"
  }, {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        image_aspect_ratio: "square",
        elements: [{
          // artwork 1
          title: "Clair de lune sur le port de Boulogne (Moonlight over the Port of Boulogne)",
          subtitle: "Édouard Manet\nBequest of Count Isaac de Camondo, 1911. Collection of Musée d’Orsay, Paris, France. RF 1993. Photo © RMN-Grand Palais (Musée d’Orsay)/Hervé Lewandowski.",
          image_url: "https://i.imgur.com/xOquuHP.jpg",
          buttons: [{
            type: "postback",
            title: "Learn more",
            payload: JSON.stringify({
              category: "art_data",
              branch: "ARTWORK_1"
            })
          }]
        }, {
          // artwork 2
          title: "La Serveuse de bocks (The Beer Maid)",
          subtitle: "Édouard Manet\nFormerly in the Matsukata collection, entered the Musée du Louvre as part of the peace treaty with Japan, 1959. Collection of Musée d’Orsay, Paris, France. RF 1959 4. Photo © RMN-Grand Palais (Musée d’Orsay)/Martine Beck-Coppola.",
          image_url: "https://i.imgur.com/pI1wiGI.jpg",
          buttons: [{
            type: "postback",
            title: "Learn more",
            payload: JSON.stringify({
              category: "art_data",
              branch: "ARTWORK_2"
            })
          }]
        }, {
          // artwork 3
          title: "La Pie (The Magpie)",
          subtitle: "Claude Manet\nPurchased by the French state, 1984. Collection of Musée d’Orsay, Paris, France. RF 1984 164. Photo © RMN-Grand Palais (Musée d’Orsay)/Hervé Lewandowski.",
          image_url: "https://i.imgur.com/9sLS7M6.jpg",
          buttons: [{
            type: "postback",
            title: "Learn more",
            payload: JSON.stringify({
              category: "art_data",
              branch: "ARTWORK_3"
            })
          }]
        }, {
          // artwork 4
          title: "Le Berceau (The Cradle)",
          subtitle: "Berthe Morisot\nPurchased 1930. Collection of Musée d’Orsay, Paris, France. RF 2849. Photo © RMN-Grand Palais (Musée d’Orsay)/Michel Urtado.",
          image_url: "https://i.imgur.com/DHD4if0.jpg",
          buttons: [{
            type: "postback",
            title: "Learn more",
            payload: JSON.stringify({
              category: "art_data",
              branch: "ARTWORK_4"
            })
          }]
        }, {
          // artwork 5
          title: "Claude Monet",
          subtitle: "Auguste Renoir\nBequest of Mr and Mrs Raymond Koechlin, 1931. Collection of Musée d’Orsay, Paris, France.  RF 3666. Photo © RMN-Grand Palais (Musée d’Orsay)/Jean-Gilles Berizzi.",
          image_url: "https://i.imgur.com/WoDpoA6.jpg",
          buttons: [{
            type: "postback",
            title: "Learn more",
            payload: JSON.stringify({
              category: "art_data",
              branch: "ARTWORK_5"
            })
          }]
        }, {
          // artwork 6
          title: "Le Bassin aux nymphéas, harmonie rose (Water Lily Pond, Pink Harmony)",
          subtitle: "Claude Monet\nBequest of Count Isaac de Camondo, 1911. Collection of Musée d’Orsay, Paris, France. RF 2005. Photo © RMN-Grand Palais (Musée d’Orsay)/Hervé Lewandowski.",
          image_url: "https://i.imgur.com/63EV6OO.jpg",
          buttons: [{
            type: "postback",
            title: "Learn more",
            payload: JSON.stringify({
              category: "art_data",
              branch: "ARTWORK_6"
            })
          }]
        }, {
          // artwork 7
          title: "Le Golfe de Marseille vu de l’Estaque (The Gulf of Marseilles Seen from L’Estaque)",
          subtitle: "Paul Cézanne\nBequest of Gustave Caillebotte, 1894. Collection of Musée d’Orsay, Paris, France. RF 2761. Photo © RMN-Grand Palais (Musée d’Orsay)/Thierry Le Mage.",
          image_url: "https://i.imgur.com/vJBZm0A.jpg",
          buttons: [{
            type: "postback",
            title: "Learn more",
            payload: JSON.stringify({
              category: "art_data",
              branch: "ARTWORK_7"
            })
          }]
        }, {
          // artwork 8
          title: "La Bouée rouge (The Red Buoy)",
          subtitle: "Paul Signac\nGift of Dr Pierre Hébert, 1957. Collection of Musée d’Orsay, Paris, France. RF 1957 12. Photo © RMN-Grand Palais (Musée d’Orsay)/Hervé Lewandowski.",
          image_url: "https://i.imgur.com/I2ZIT5i.jpg",
          buttons: [{
            type: "postback",
            title: "Learn more",
            payload: JSON.stringify({
              category: "art_data",
              branch: "ARTWORK_8"
            })
          }]
        }, {
          // artwork 9
          title: "La Cathédrale de Rouen. Le portail et la tour Saint-Romain, plein soleil (Rouen Cathedral: The Portal and Saint-Romain Tower, Full Sunlight)",
          subtitle: "Claude Monet\nBequest of Count Isaac de Camondo, 1911.Collection of Musée d’Orsay, Paris, France.  RF 2002. Photo © RMN-Grand Palais (Musée d’Orsay)/Thierry Le Mage.",
          image_url: "https://i.imgur.com/P8jlw7U.jpg",
          buttons: [{
            type: "postback",
            title: "Learn more",
            payload: JSON.stringify({
              category: "art_data",
              branch: "ARTWORK_9"
            })
          }]
        }, {
          // artwork 10
          title: "Gabrielle à la rose (Gabrielle with a Rose)",
          subtitle: "Auguste Renoir\nBequest of Count Isaac de Camondo, 1911. Collection of Musée d’Orsay, Paris, France. RF 2002. Photo © RMN-Grand Palais (Musée d’Orsay)/Thierry Le Mage.",
          image_url: "https://i.imgur.com/vkJCadI.jpg",
          buttons: [{
            type: "postback",
            title: "Learn more",
            payload: JSON.stringify({
              category: "art_data",
              branch: "ARTWORK_10"
            })
          }]
        }]
      }
    }
  }],

  ARTWORK_1: [{
    attachment: {
      type: "image",
      payload: {
        attachment_id: "1909261475994900"
      }
    }
  }, {
    text: "Clair de lune sur le port de Boulogne (Moonlight over the Port of Boulogne)\n\n\
Édouard Manet\n\nBequest of Count Isaac de Camondo, 1911. Collection of Musée d’Orsay, Paris, France. RF 1993. Photo © RMN-Grand Palais (Musée d’Orsay)/Hervé Lewandowski."
  }, {
    text: "Manet’s friend and fellow painter Alfred Stevens kept this painting in his Paris studio for a few years. \
Paul Durand-Ruel discovered it there and loved it so much that he bought 20 works by Manet 😱"
  }, {
    text: "Durand-Ruel ended up becoming the main art dealer for Manet and other Impressionist artists!",
    quick_replies: [{
      content_type: "text",
      title: "🖼 Next artwork",
      payload: JSON.stringify({
        category: "art_data",
        branch: "ARTWORK_2"
      })
    }, {
      content_type: "text",
      title: "👀 Art of seeing art",
      payload: JSON.stringify({
        category: "pick_a_card",
        branch: "pick_a_card_start"
      })
    }, {
      content_type: "text",
      title: "🎧 Audio guide",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "AUDIO_GUIDE"
      })
    }, {
      content_type: "text",
      title: "🙋 Tours",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "NEXT_TOUR"
      })
    }]
  }],

  ARTWORK_2: [{
    attachment: {
      type: "image",
      payload: {
        attachment_id: "1909265825994465"
      }
    }
  }, {
    text: "La Serveuse de bocks (The Beer Maid)\n\n\
Édouard Manet\n\nFormerly in the Matsukata collection, entered the Musée du Louvre as part of the peace treaty with Japan, 1959. Collection of Musée d’Orsay, Paris, France. RF 1959 4. Photo © RMN-Grand Palais (Musée d’Orsay)/Martine Beck-Coppola."
  }, {
    text: "Because Manet so often captured scenes of the Parisian nightlife, a number of his paintings have beer in them. 💁🍻",
    quick_replies: [{
      content_type: "text",
      title: "🖼 Next artwork",
      payload: JSON.stringify({
        category: "art_data",
        branch: "ARTWORK_3"
      })
    }, {
      content_type: "text",
      title: "👀 Art of seeing art",
      payload: JSON.stringify({
        category: "pick_a_card",
        branch: "pick_a_card_start"
      })
    }, {
      content_type: "text",
      title: "🎧 Audio guide",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "AUDIO_GUIDE"
      })
    }, {
      content_type: "text",
      title: "🙋 Tours",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "NEXT_TOUR"
      })
    }]
  }],

  ARTWORK_3: [{
    attachment: {
      type: "image",
      payload: {
        attachment_id: "1909266012661113"
      }
    }
  }, {
    text: "La Pie (The Magpie)\n\n\
Claude Manet\n\nPurchased by the French state, 1984. Collection of Musée d’Orsay, Paris, France. RF 1984 164. Photo © RMN-Grand Palais (Musée d’Orsay)/Hervé Lewandowski."
  }, {
    text: "Did you know that the white snow in this painting is actually made of dabs of blue, pink and yellow as well?",
    quick_replies: [{
      content_type: "text",
      title: "🖼 Next artwork",
      payload: JSON.stringify({
        category: "art_data",
        branch: "ARTWORK_4"
      })
    }, {
      content_type: "text",
      title: "👀 Art of seeing art",
      payload: JSON.stringify({
        category: "pick_a_card",
        branch: "pick_a_card_start"
      })
    }, {
      content_type: "text",
      title: "🎧 Audio guide",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "AUDIO_GUIDE"
      })
    }, {
      content_type: "text",
      title: "🙋 Tours",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "NEXT_TOUR"
      })
    }]
  }],

  ARTWORK_4: [{
    attachment: {
      type: "image",
      payload: {
        attachment_id: "1909266129327768"
      }
    }
  }, {
    text: "Le Berceau (The Cradle)\n\n\
Berthe Morisot\n\nPurchased 1930. Collection of Musée d’Orsay, Paris, France. RF 2849. Photo © RMN-Grand Palais (Musée d’Orsay)/Michel Urtado."
  }, {
    text: "Morisot led a double life of sorts! She loved painting, but when visitors came over,\
 she would hide her paintings and present herself as a fancy high society lady 👩‍🎨➡👸",
    quick_replies: [{
      content_type: "text",
      title: "🖼 Next artwork",
      payload: JSON.stringify({
        category: "art_data",
        branch: "ARTWORK_5"
      })
    }, {
      content_type: "text",
      title: "👀 Art of seeing art",
      payload: JSON.stringify({
        category: "pick_a_card",
        branch: "pick_a_card_start"
      })
    }, {
      content_type: "text",
      title: "🎧 Audio guide",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "AUDIO_GUIDE"
      })
    }, {
      content_type: "text",
      title: "🙋 Tours",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "NEXT_TOUR"
      })
    }]
  }],

  ARTWORK_5: [{
    attachment: {
      type: "image",
      payload: {
        attachment_id: "1909266285994419"
      }
    }
  }, {
    text: "Claude Monet\n\n\
Auguste Renoir\n\nBequest of Mr and Mrs Raymond Koechlin, 1931. Collection of Musée d’Orsay, Paris, France.  RF 3666. Photo © RMN-Grand Palais (Musée d’Orsay)/Jean-Gilles Berizzi."
  }, {
    text: "Can you guess what Monet is painting and how the artwork looks based on his palette?\
 As Monet rarely painted figures indoors, some people think that he may have been working on a painting\
 of his wife dressed in a kimono titled _La Japonaise_, which was shown at the second Impressionist exhibition in 1876.",
    quick_replies: [{
      content_type: "text",
      title: "🖼 Next artwork",
      payload: JSON.stringify({
        category: "art_data",
        branch: "ARTWORK_6"
      })
    }, {
      content_type: "text",
      title: "👀 Art of seeing art",
      payload: JSON.stringify({
        category: "pick_a_card",
        branch: "pick_a_card_start"
      })
    }, {
      content_type: "text",
      title: "🎧 Audio guide",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "AUDIO_GUIDE"
      })
    }, {
      content_type: "text",
      title: "🙋 Tours",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "NEXT_TOUR"
      })
    }]
  }],

  ARTWORK_6: [{
    attachment: {
      type: "image",
      payload: {
        attachment_id: "1909266592661055"
      }
    }
  }, {
    text: "Le Bassin aux nymphéas, harmonie rose (Water Lily Pond, Pink Harmony)\n\n\
Claude Monet\n\nBequest of Count Isaac de Camondo, 1911. Collection of Musée d’Orsay, Paris, France. RF 2005. Photo © RMN-Grand Palais (Musée d’Orsay)/Hervé Lewandowski."
  }, {
    text: "Monet was an avid botanist. He once said, “My garden is my most beautiful masterpiece.”🌾🌿🍀🌲",
    quick_replies: [{
      content_type: "text",
      title: "🖼 Next artwork",
      payload: JSON.stringify({
        category: "art_data",
        branch: "ARTWORK_7"
      })
    }, {
      content_type: "text",
      title: "👀 Art of seeing art",
      payload: JSON.stringify({
        category: "pick_a_card",
        branch: "pick_a_card_start"
      })
    }, {
      content_type: "text",
      title: "🎧 Audio guide",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "AUDIO_GUIDE"
      })
    }, {
      content_type: "text",
      title: "🙋 Tours",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "NEXT_TOUR"
      })
    }]
  }],

  ARTWORK_7: [{
    attachment: {
      type: "image",
      payload: {
        attachment_id: "1909266652661049"
      }
    }
  }, {
    text: "Le Golfe de Marseille vu de l’Estaque (The Gulf of Marseilles Seen from L’Estaque)\n\n\
Paul Cézanne\n\nBequest of Gustave Caillebotte, 1894. Collection of Musée d’Orsay, Paris, France.  RF 2761. Photo © RMN-Grand Palais (Musée d’Orsay)/Thierry Le Mage."
  }, {
    text: "L’Estaque was a Mediterranean fishing village that Cézanne escaped to when family life got a\
 little too complicated. It inspired some of his grandest landscape paintings.",
    quick_replies: [{
      content_type: "text",
      title: "🖼 Next artwork",
      payload: JSON.stringify({
        category: "art_data",
        branch: "ARTWORK_8"
      })
    }, {
      content_type: "text",
      title: "👀 Art of seeing art",
      payload: JSON.stringify({
        category: "pick_a_card",
        branch: "pick_a_card_start"
      })
    }, {
      content_type: "text",
      title: "🎧 Audio guide",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "AUDIO_GUIDE"
      })
    }, {
      content_type: "text",
      title: "🙋 Tours",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "NEXT_TOUR"
      })
    }]
  }],

  ARTWORK_8: [{
    attachment: {
      type: "image",
      payload: {
        attachment_id: "1909267332660981"
      }
    }
  }, {
    text: "La Bouée rouge (The Red Buoy)\n\n\
Paul Signac\n\nGift of Dr Pierre Hébert, 1957. Collection of Musée d’Orsay, Paris, France. RF 1957 12. Photo © RMN-Grand Palais (Musée d’Orsay)/Hervé Lewandowski."
  }, {
    text: "Signac was an enthusiastic sailor who painted landscapes across the coasts of Europe. In 2010,\
 a hotel by a lake in the Netherlands, Hotel Spaander, discovered one of his works, which Signac supposedly used to pay for his stay. ⛵",
    quick_replies: [{
      content_type: "text",
      title: "🖼 Next artwork",
      payload: JSON.stringify({
        category: "art_data",
        branch: "ARTWORK_9"
      })
    }, {
      content_type: "text",
      title: "👀 Art of seeing art",
      payload: JSON.stringify({
        category: "pick_a_card",
        branch: "pick_a_card_start"
      })
    }, {
      content_type: "text",
      title: "🎧 Audio guide",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "AUDIO_GUIDE"
      })
    }, {
      content_type: "text",
      title: "🙋 Tours",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "NEXT_TOUR"
      })
    }]
  }],

  ARTWORK_9: [{
    attachment: {
      type: "image",
      payload: {
        attachment_id: "1909267442660970"
      }
    }
  }, {
    text: "La Cathédrale de Rouen. Le portail et la tour Saint-Romain, plein soleil (Rouen Cathedral: The Portal and Saint-Romain Tower, Full Sunlight)\n\n\
Claude Monet\n\nBequest of Count Isaac de Camondo, 1911.Collection of Musée d’Orsay, Paris, France.  RF 2002. Photo © RMN-Grand Palais (Musée d’Orsay)/Thierry Le Mage."
  }, {
    text: "Monet painted over 30 Rouen Cathedral paintings to capture the light that changed from day to day.\
 He had vivid nightmares of the cathedral, in various hues of pinks, blues and yellows, falling on him.✨",
    quick_replies: [{
      content_type: "text",
      title: "🖼 Next artwork",
      payload: JSON.stringify({
        category: "art_data",
        branch: "ARTWORK_10"
      })
    }, {
      content_type: "text",
      title: "👀 Art of seeing art",
      payload: JSON.stringify({
        category: "pick_a_card",
        branch: "pick_a_card_start"
      })
    }, {
      content_type: "text",
      title: "🎧 Audio guide",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "AUDIO_GUIDE"
      })
    }, {
      content_type: "text",
      title: "🙋 Tours",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "NEXT_TOUR"
      })
    }]
  }],

  ARTWORK_10: [{
    attachment: {
      type: "image",
      payload: {
        attachment_id: "1909267662660948"
      }
    }
  }, {
    text: "Gabrielle à la rose (Gabrielle with a Rose)_\n\n\
Auguste Renoir\n\nBequest of Count Isaac de Camondo, 1911. Collection of Musée d’Orsay, Paris, France. RF 2002. Photo © RMN-Grand Palais (Musée d’Orsay)/Thierry Le Mage."
  }, {
    text: "Gabrielle was a cousin of Renoir’s wife.\
 Apart from babysitting the young Renoir children, she also often posed half-clothed or nude for Renoir’s paintings 🙈",
    quick_replies: [{
      content_type: "text",
      title: "🖼 Next artwork",
      payload: JSON.stringify({
        category: "art_data",
        branch: "ARTWORK_1"
      })
    }, {
      content_type: "text",
      title: "👀 Art of seeing art",
      payload: JSON.stringify({
        category: "pick_a_card",
        branch: "pick_a_card_start"
      })
    }, {
      content_type: "text",
      title: "🎧 Audio guide",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "AUDIO_GUIDE"
      })
    }, {
      content_type: "text",
      title: "🙋 Tours",
      payload: JSON.stringify({
        category: "faq_helpers",
        branch: "NEXT_TOUR"
      })
    }]
  }]
};
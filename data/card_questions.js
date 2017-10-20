export const card_questions = [
  {
    // question 1
    text: "Look at this painting for 60 seconds. How do the colours make you feel?",
    quick_replies: [
      {
        content_type: "text",
        title: "Happy ☺️",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_1",
        }),
      },
      {
        content_type: "text",
        title: "Sad 😞",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_1",
        }),
      },
      {
        content_type: "text",
        title: "Excited 😆",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_1",
        }),
      },
    ]
  },
  {
    // question 2
    text: "Is this scene similar to or different from your daily life?",
    quick_replies: [
      {
        content_type: "text",
        title: "Vastly different",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_2",
        }),
      },
      {
        content_type: "text",
        title: "Quite similar",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_2",
        }),
      },
      {
        content_type: "text",
        title: "Is this my life?",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_2",
        }),
      },
    ]
  },
  {
    // question 3
    text: "Do you notice any significant motifs in this painting? Are they located in the foreground, middle ground or background?",
    quick_replies: [
      {
        content_type: "text",
        title: "Foreground",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_3",
        }),
      },
      {
        content_type: "text",
        title: "Middle ground",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_3",
        }),
      },
      {
        content_type: "text",
        title: "Background",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_3",
        }),
      },
    ]
  },
  {
    // question 4
    text: "Where do you think this work might be set in?",
    quick_replies: [
      {
        content_type: "text",
        title: "City 🌆",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_4",
        }),
      },
      {
        content_type: "text",
        title: "Countryside 🚜",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_4",
        }),
      },
      {
        content_type: "text",
        title: "I can’t tell 🤷",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_4",
        }),
      },
    ]
  },
  {
    // question 5
    text: "How would you describe the tones in this painting?",
    quick_replies: [
      {
        content_type: "text",
        title: "Bright 🌞",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_5",
        }),
      },
      {
        content_type: "text",
        title: "Dark and sombre 🌑",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_5",
        }),
      },
      {
        content_type: "text",
        title: "A bit of both", // ISSUE with word count
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_5",
        }),
      },
    ]
  },
  {
    // question 6
    text: "Do the forms in this painting appear clear or blurred to you?",
    quick_replies: [
      {
        content_type: "text",
        title: "Clear",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_6",
        }),
      },
      {
        content_type: "text",
        title: "Blurred",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_6",
        }),
      },
      {
        content_type: "text",
        title: "A bit of both",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_6",
        }),
      },
    ]
  },
  {
    // question 7
    text: "Is this artwork big or small?",
    quick_replies: [
      {
        content_type: "text",
        title: "Big",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_7",
        }),
      },
      {
        content_type: "text",
        title: "Small",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_7",
        }),
      },
      {
        content_type: "text",
        title: "Average",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_7",
        }),
      },
    ]
  },
  {
    // question 8
    text: "What kind of colours do you notice in this painting?",
    quick_replies: [
      {
        content_type: "text",
        title: "Warm",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_8",
        }),
      },
      {
        content_type: "text",
        title: "Cool",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_8",
        }),
      },
      {
        content_type: "text",
        title: "Complementary",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_8",
        }),
      },
    ]
  },
  {
    // question 9
    text: "What kind of brushstrokes can you see in this painting?",
    quick_replies: [
      {
        content_type: "text",
        title: "Loose and fluid",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_9",
        }),
      },
      {
        content_type: "text",
        title: "Thick and textured",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_9",
        }),
      },
      {
        content_type: "text",
        title: "Tiny dabs",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_9",
        }),
      },
    ]
  },
  {
    // question 10
    text: "How do you think this painter created this scene?",
    quick_replies: [
      {
        content_type: "text",
        title: "From memory",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_10",
        }),
      },
      {
        content_type: "text",
        title: "Through photographs",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_10",
        }),
      },
      {
        content_type: "text",
        title: "At the scene itself",
        payload: JSON.stringify({
          category: "pick_a_card",
          branch: "question_10",
        }),
      },
    ]
  },
]

export const card_answers = {
  question_1: {
    text: "Artists sometimes use colour to evoke a particular mood or atmosphere.\
 Find the palettes and paints that Impressionist artists used in Singtel Special Exhibition Gallery B."
  },

  question_2: {
    text: "Many Impressionists painted everyday scenes of the Parisian middle class in cafés,\
 cabarets and parks. Instead of formal poses and staged settings, they often captured images that were candid.\
 Consider how this compares to the way you see and document the world you live in."
  },

  question_3: {
    text: "Impressionists often arranged paintings in three sections—foreground,\
 middle ground and background—to lend perspective or create a sense of balance and harmony."
  },

  question_4: {
    text: "Many Impressionist artists took inspiration from their surroundings.\
 While some captured modern city life, a few were averse to the intense pace of\
 modern society and—with the ease of mobility provided by new railroads—escaped to the countryside to paint."
  },

  question_5: {
    text: "Impressionist artists played with light and shadow.\
 They were also attuned to colour and optical theory and often created shadows using complementary colours instead of black. "
  },

  question_6: {
    text: "Most Impressionist artists painted realistic scenes of modern life _en plein air_,\
 or outdoors. They created blurred outlines or vague forms in their paintings to portray a fleeting moment and capture a sense of ambiguity."
  },

  question_7: {
    text: "The size of an artwork depends on the choice of subject matter,\
 where it will be presented, and even how much money the artist has to buy paints and canvasses.\
 Some Impressionists would reuse an old canvas by painting another work on top of an existing one."
  },

  question_8: {
    text: "Impressionist artists often juxtapose warm and cool colours, such as orange and blue, side by side.\
 Complementary colours “vibrate” when placed next to each other, creating the visual effect of appearing brighter, or more intense."
  },

  question_9: {
    text: "Instead of rendering realistic details in photographic quality, Impressionists artists often made\
 their brushwork visible, relying on the viewer’s eye to visually blend the individual marks and colours."
  },

  question_10: {
    text: "Photography inspired artists to capture immediate snapshots or moments in time.\
 The invention of synthetic paints in portable tubes allowed them to work spontaneously,\
 whether outdoors or in a studio. Consider the ways new technologies affect the things you create. "
  },
}
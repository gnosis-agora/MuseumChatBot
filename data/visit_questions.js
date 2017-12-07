export const visit = {
  visit_start: [
    // Insert some kind of intro here.
    {
      text: "👌 I can help you with the following:",
      quick_replies: [
        {
          content_type: "text",
          title: "🕰 Opening hours",
          payload: JSON.stringify({
            category: "visit",
            branch: "visit_opening_hours"
          }),
        },
        {
          content_type: "text",
          title: "🎟 Tickets",
          payload: JSON.stringify({
            category: "visit",
            branch: "visit_tickets"
          }),
        },
        {
          content_type: "text",
          title: "🙋 Tours",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        }
      ]
    },   
  ],

  visit_tickets: [
    {
      text: "Are you a Singaporean/PR?",
      quick_replies: [
        {
          content_type: "text",
          title: "Yes",
          payload: JSON.stringify({
            category: "visit",
            branch: "singaporean_tickets"
          }),
        },
        {
          content_type: "text",
          title: "No",
          payload: JSON.stringify({
            category: "visit",
            branch: "non_singaporean_tickets"
          }),
        }
      ]
    },
  ],

  singaporean_tickets: [
    {
      text: "Century of Light only* - $15\nConcessions - $10\n\n*Includes a General Admission ticket.\n\nCentury of Light is a showcase of art from the 19th century that brings together two exhibitions—Between Worlds and Colours of Impressionism.",
      quick_replies: [
        {
          content_type: "text",
          title: "Concessions?",
          payload: JSON.stringify({
            category: "visit",
            branch: "concession_holder"
          }),
        },
        {
          content_type: "text",
          title: "Free admission?",
          payload: JSON.stringify({
            category: "visit",
            branch: "free_tickets"
          }),
        }
      ]
    }
  ],

  non_singaporean_tickets: [
    {
      text: "Century of Light only - $25\nConcessions - $20\n\nAll-access pass* - $30\nConcessions - $25\n\n*Includes a General Admission ticket.\n\nCentury of Light is a showcase of art from the 19th century that brings together two exhibitions—Between Worlds and Colours of Impressionism.",
      quick_replies: [
        {
          content_type: "text",
          title: "Concessions?",
          payload: JSON.stringify({
            category: "visit",
            branch: "concession_holder"
          }),
        },
        {
          content_type: "text",
          title: "Free admission?",
          payload: JSON.stringify({
            category: "visit",
            branch: "free_tickets"
          }),
        }
      ]
    }
  ],  

  concession_holder: [
    {
      text: "Concessions apply to children aged 7–12, seniors aged 60 and above,\
 full-time National Servicemen (NSF) excluding foreign personnel and overseas students and teachers. Valid verification is needed.",
      quick_replies: [
        {
          content_type: "text",
          title: "🕰 Opening hours",
          payload: JSON.stringify({
            category: "visit",
            branch: "visit_opening_hours"
          }),
        },
        {
          content_type: "text",
          title: "🙋 Tours",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        },
        {
          content_type:"text",
          title: "🎨 Back to highlights",
          payload: JSON.stringify({
            category: "art_data",
            branch: "ART_START"
          }),
        },
        {
          content_type:"text",
          title: "📷 #CenturyofLight",
          payload: JSON.stringify({
            category: "instagram_impressions",
            branch: "instagram_impressions"
          }),
        },
      ]      
    }
  ],

  free_tickets: [
    {
      text: "This exhibition is free for children aged 6 and below, \
local and locally-based students and teachers, persons with disabilities and one caregiver. Tickets are still required for entry.",
      quick_replies: [
        {
          content_type: "text",
          title: "🕰 Opening hours",
          payload: JSON.stringify({
            category: "visit",
            branch: "visit_opening_hours"
          }),
        },
        {
          content_type: "text",
          title: "🙋 Tours",
          payload: JSON.stringify({
            category: "faq_helpers",
            branch: "NEXT_TOUR"
          }),
        },
        {
          content_type:"text",
          title: "🎨 Back to highlights",
          payload: JSON.stringify({
            category: "art_data",
            branch: "ART_START"
          }),
        },
        {
          content_type:"text",
          title: "📷 #CenturyofLight",
          payload: JSON.stringify({
            category: "instagram_impressions",
            branch: "instagram_impressions"
          }),
        },
      ]      
    }
  ],  
}
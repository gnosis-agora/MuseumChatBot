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
        }
      ]
    },   
  ],

  visit_tickets: [
    {
      text: "Are you a Singaporean or PR?",
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
      text: "All-access pass (includes General Admission ticket) - $15\nConcession-holders - $10",
      quick_replies: [
        {
          content_type: "text",
          title: "Concession-holder",
          payload: JSON.stringify({
            category: "visit",
            branch: "concession_holder"
          }),
        },
        {
          content_type: "text",
          title: "Free tickets?",
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
      text: "Exhibition only - $25\nConcession-holders - $20\n\nAll-access pass (includes General Admission ticket) - $30\nConcession holders - $25",
      quick_replies: [
        {
          content_type: "text",
          title: "Concession-holder",
          payload: JSON.stringify({
            category: "visit",
            branch: "concession_holder"
          }),
        },
        {
          content_type: "text",
          title: "Free tickets?",
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
          content_type:"text",
          title: "🖼 Visit",
          payload: JSON.stringify({
            category: "visit",
            branch: "visit_start"
          }),
        },
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
          title: "📷 Instagrammables",
          payload: JSON.stringify({
            category: "instagram_impressions",
            branch: "instagram_impressions"
          }),
        }
      ]      
    }
  ],

  free_tickets: [
    {
      text: "This exhibition is free for children aged 6 and below, \
local and locally-based students and teachers, persons with disabilities and one caregiver. Tickets are still required for entry.",
      quick_replies: [
        {
          content_type:"text",
          title: "🖼 Visit",
          payload: JSON.stringify({
            category: "visit",
            branch: "visit_start"
          }),
        },
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
          title: "📷 Instagrammables",
          payload: JSON.stringify({
            category: "instagram_impressions",
            branch: "instagram_impressions"
          }),
        }
      ]      
    }
  ],  
}
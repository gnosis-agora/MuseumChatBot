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
      text: "Head over to our ticketing counters on Level B1 or book your tickets online a day in advance."
    }
  ],


}
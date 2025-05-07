const ExampleEvents = [
  { id: 1, title: "Meeting with John", time: "03/10/2025 10:00 AM", length: "60 minutes" },
  { id: 2, title: "Grocery Shopping", time: "02/14/2025 11:00 AM", length: "30 minutes" },
  { id: 3, title: "Lunch with Jane", time: "08/14/2025 1:00 PM", length: "10 minutes" },
  { id: 4, title: "Dinner with John", time: "05/25/2025 7:00 PM", length: "300 minutes" },
];

const ExampleResponse = `
Your schedule for the day is: \n
1. Meeting with John at 10:00 to 11:00 AM on 10th of March 2025 \n
2. Grocery Shopping at 11:00 AM to 11:30 AM on 14th of February 2025 \n
3. Lunch with Jane at 1:00 PM to 1:10 PM on 14th of August 2025 \n
4. Dinner with John at 7:00 PM-10:00 PM on 25th of May 2025
`;

export const listEventsExample1 = `
{type: "user", query: "Can you please list my schedule for the day?"}
{"type": "PLANING", "plan": "I will call "ListEvents" function to get the events in your schedule"}
{"type": "ACTION", "function": "ListEvents")}}
{"type": "OBSERVATION", "content": ${JSON.stringify(ExampleEvents)}}
{"type": "RESPONDING", "response": ${ExampleResponse}}
`;


export const listEventsExample2 = `
- timeMin must be less than timeMax
- timeMin and timeMax must be in the same timezone
{type: "user", query: "Can you please list my schedule on 10th of May 2025?"}
{"type": "PLANING", "plan": "I will call "ListEvents" function to get the events in your schedule"}
{"type": "ACTION", "function": "ListEvents", "input": ${JSON.stringify({timeMin: "10/05/2025 12:00 AM", timeMax: "10/05/2025 11:59 PM"})}}
{"type": "OBSERVATION", "content": ${JSON.stringify(ExampleEvents)}}
{"type": "RESPONDING", "response": ${ExampleResponse}}
`;
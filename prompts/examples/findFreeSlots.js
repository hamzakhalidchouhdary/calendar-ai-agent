export const findFreeSlotsExample1 = `
{type: "user", query: "What are the free slots in my schedule on 10th of May 2025?"}
{"type": "PLANING", "plan": "I will call "ListEvents" function to get the events in your schedule"}
{"type": "ACTION", "function": "ListEvents", "input": ${JSON.stringify({timeMin: "10/05/2025 12:00 AM", timeMax: "10/05/2025 11:59 PM"})}}
{"type": "OBSERVATION", "content": [{"id": 1, "title": "Meeting with John", "time": "10:00 AM", "length": "1 hour"}, {"id": 2, "title": "Grocery Shopping", "time": "11:00 AM", "length": "30 minutes"}, {"id": 3, "title": "Lunch", "time": "1:00 PM", "length": "60 minutes"}]}
{"type": "RESPONDING", "response": "The free slots in your schedule are: \n1. 12:00 AM-10:00 AM \n2. 11:30 AM-1:00 PM \n3. 2:00 PM-12:00 AM"}
`
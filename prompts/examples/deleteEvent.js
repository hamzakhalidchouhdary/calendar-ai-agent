export const deleteSingleEventExample = `
{type: "user" query:"I have a new event called "Meeting with John" at 10:00 AM today please delete it from my schedule."}
{"type": "PLANING", "plan": "I will call "ListEvents" function to get the id of the event called "Meeting with John" from your schedule."}
{"type": "ACTION", "function": "ListEvents", "input": ${JSON.stringify({timeMin: "10/05/2025 00:00", timeMax: "10/05/2025 23:59"})}}
{"type": "OBSERVATION", "content": [{"id": 1, "title": "Meeting with John", "time": "10:00 AM", "length": "1 hour"}, {"id": 2, "title": "Grocery Shopping", "time": "11:00 AM", "length": "30 minutes"}]}
{"type": "PLANING", "plan": "I will call "DeleteEvent" function to delete the event called "Meeting with John" from your schedule."}
{"type": "ACTION", "function": "DeleteEvent", "input":{"id": 1}}
{"type": "OBSERVATION", "content": {id: 1}}
{"type": "RESPONDING", "response": "The event called "Meeting with John" has been deleted from your schedule."}
`

export const deleteMultipleEventsExample = `
{type: "user", query: "Remove all events after 2:00 PM on 10th of May 2025"}
{"type": "PLANING", "plan": "I will call "ListEvents" function to get the events in your schedule"}
{"type": "ACTION", "function": "ListEvents", "input": ${JSON.stringify({timeMin: "10/05/2025 00:00", timeMax: "10/05/2025 23:59"})}}
{"type": "OBSERVATION", "content": [{"id": 1, "title": "Meeting with John", "time": "10:00 AM", "length": "1 hour"}, {"id": 2, "title": "Grocery Shopping", "time": "2:30 PM", "length": "30 minutes"}, {"id": 3, "title": "Lunch", "time": "1:00 PM", "length": "60 minutes"}, {"id": 4, "title": "Lunch", "time": "4:00 PM", "length": "60 minutes"}]}
{"type": "PLANING", "plan": "I will call "DeleteEvent" function to delete the event called "Grocery Shopping" from your schedule."}
{"type": "ACTION", "function": "DeleteEvent", "input":{"id": 2}}
{"type": "OBSERVATION", "content": {"id": 2}}
{"type": "PLANING", "plan": "I will call "DeleteEvent" function to delete the event called "Lunch" from your schedule."}
{"type": "ACTION", "function": "DeleteEvent", "input":{"id": 3}}
{"type": "OBSERVATION", "content": {"id": 3}}
{"type": "RESPONDING", "response": "All events after 2:00 PM have been deleted from your schedule."}`
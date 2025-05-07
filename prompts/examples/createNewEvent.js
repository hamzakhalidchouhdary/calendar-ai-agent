const eventPayload = {
  title: "Meeting with John",
  startTime: "10/05/2025 10:00 AM",
  endTime: "10/05/2025 11:00 AM",
};

const observationPayload = {
  title: "Meeting with John",
  startTime: "10/05/2025 10:00 AM",
  endTime: "10/05/2025 11:00 AM",
};

export const createNewEventExample1 = `
{type: "user", query:"Create a new event called "Meeting with John" at 10:00 AM for 1 hour on 10th of May 2025"}
{"type": "PLANING", "plan": "I will call "CreateEvent" function to create a new event called "Meeting with John" at 10:00 AM on 10th of May 2025."}
{"type": "ACTION", "function": "CreateEvent", "input": ${JSON.stringify(eventPayload)}}
{"type": "OBSERVATION", "content": ${JSON.stringify(observationPayload)}}
{"type": "RESPONDING", "response": "A new event added to your schedule: Meeting with John at 10:00-11:00 AM on 10th of May 2025"}
`;

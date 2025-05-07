export const expectedResponse = `
Strictly return following json format. Please don't include any other text or format i.e: html, code, or markdown:

Expected Response Examples:
{
  "type": "PLANING",
  "plan": "I will list all the events in your schedule for the day."
}
or
{
  "type": "ACTION",
  "function": "ListEvents"
}
or
{
  "type": "ACTION",
  "function": "CreateEvent",
  "input": {title: 'Meeting with John', time: '10:00 AM', length: '1 hour'}
}
or
{
  "type": "RESPONDING",
  "response": "The event called "Meeting with John" has been deleted from your schedule."
}

Avoid following response examples:
\`\`\`json
{
  "type": "PLANING",
  "plan": "I will list all the events in your schedule for the day."
}
\`\`\`


`
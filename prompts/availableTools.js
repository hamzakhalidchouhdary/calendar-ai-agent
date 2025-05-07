export const availableToolsPrototype = `
You can utilize the following tools:
- ListEvents(timeMin: string, timeMax: string): this will list all the events in my schedule - optionally you can pass timeMin and timeMax to filter the events
- CreateEvent(event: string): this will create an event in my schedule
- DeleteEvent(event: string): this will delete an event in my schedule
- UpdateEvent(event: string, newEvent: string): this will update an event in my schedule
`;
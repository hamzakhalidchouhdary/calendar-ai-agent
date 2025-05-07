import GoogleCalendar from "./googleApi/calendar.js";

const googleCalendar = new GoogleCalendar();
await googleCalendar.init();

console.log(await googleCalendar.listEvents());

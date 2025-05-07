import GoogleCalendar from "../googleApi/calendar.js";
import moment from "moment";

const googleCalendar = new GoogleCalendar();
await googleCalendar.init();

export const TOOLS = {
  ListEvents: async (input) => {
    const payload = {
      timeMin: moment(input.timeMin, "DD/MM/YYYY hh:mm A").format(),
      timeMax: moment(input.timeMax, "DD/MM/YYYY hh:mm A").format(),
    };
    return googleCalendar.listEvents(payload);
  },
  CreateEvent: async (input) => {
    const event = {
      summary: input.title,
      start: {
        dateTime: moment(input.startTime, "DD/MM/YYYY hh:mm A").format(),
        timeZone: "Asia/Karachi",
      },
      end: {
        dateTime: moment(input.endTime, "DD/MM/YYYY hh:mm A").format(),
        timeZone: "Asia/Karachi",
      },
    };
    console.log(input, event);
    return googleCalendar.createEvent(event);
  },
  DeleteEvent: async (input) => {
    return googleCalendar.deleteEvent(input.id);
  },
};

import { calendar } from "@googleapis/calendar";
import { GoogleAuth } from "./gAuth.js";
import moment from "moment";

export default class GoogleCalendar {
  async init() {
    this.gAuth = new GoogleAuth(["https://www.googleapis.com/auth/calendar"]);
    this.cal = calendar({ version: "v3", auth: await this.gAuth.getAuth() });
  }

  async listEvents({
    timeMin = new Date().toISOString(),
    timeMax = new Date().toISOString(),
  }) {
    try {
      const events = await this.cal.events.list({
        calendarId: "primary",
        timeMin,
        timeMax,
        maxResults: 10,
        singleEvents: true,
        orderBy: "startTime",
      });

      const _events = events.data.items.map((event) => {
        return {
          id: event.id,
          title: event.summary,
          time: moment(event.start.dateTime).format("MM/DD/YYYY hh:mm A"),
          length: `${moment(event.end.dateTime).diff(
            moment(event.start.dateTime),
            "minutes"
          )} minutes`,
        };
      });

      return _events;
    } catch (error) {
      console.log(error);

      console.error("Error fetching events:", error.message);
      return [];
    }
  }

  async createEvent(event) {
    try {
      console.log(event);
      const response = await this.cal.events.insert({
        calendarId: "primary",
        resource: event,
      });

      const resp = {
        title: response.data.summary,
        startTime: moment(response.data.start.dateTime).format(
          "DD/MM/YYYY hh:mm A"
        ),
        endTime: moment(response.data.end.dateTime).format(
          "DD/MM/YYYY hh:mm A"
        ),
      };

      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteEvent(eventId) {
    try {
      await this.cal.events.delete({
        calendarId: "primary",
        eventId,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

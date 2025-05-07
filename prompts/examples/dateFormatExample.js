import moment from "moment";

export const dateFormatExample = `
Follow the following format for date and time:

Format event time like this: DD/MM/YYYY hh:mm A
Date format: DD/MM/YYYY
Time format: HH:mm A

10th of May 2025 at 10:00 AM -> 10/05/2025 10:00 AM
1st of June 2025 at 11:00 PM -> 01/06/2025 11:00 PM
Aug 10, 2025 at 10:00 AM -> 10/08/2025 10:00 AM

Blow are today's date and time:

Today's date: ${moment().format("DD/MM/YYYY")}
Current time: ${moment().format("HH:mm A")}

`;
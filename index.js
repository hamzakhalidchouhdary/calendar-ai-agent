import dotenv from "dotenv";
dotenv.config();

import { readUserQuery } from "./utilities/index.js";
import { AiAssistant } from "./aiAssistant/index.js";

const aiAssistant = new AiAssistant();

let userQuery = "";

do {
  userQuery = await readUserQuery();
  const response = await aiAssistant.chat(userQuery);
  console.log(response);
} while (userQuery !== "exit");

/*

add Skin Care Appointment for 1 hour at 4pm
mark my calender as busy from 8pm to 8:30 today evening for Dinner with John
list all schedule for today

delete all events after 4pm

*/

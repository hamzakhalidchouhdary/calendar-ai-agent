import readline from "readline-sync";

export const tryJsonParse = (json) => {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.log("json parse error", error);
    return json;
  }
};

export const readUserQuery = async function () {
  return readline.question(">> ");
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

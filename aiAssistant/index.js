import { GoogleGenerativeAI } from "@google/generative-ai";
import { sleep, tryJsonParse } from "../utilities/index.js";
import { TOOLS } from "../tools/index.js";
import { SYSTEM_PROMPT } from "../prompts/system.prompt.js";

export class AiAssistant {
  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    this.model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    this.request = {
      contents: [],
      systemInstruction: { role: "system", parts: [{ text: SYSTEM_PROMPT }] },
    };
    this.aiResponse = {};
  }

  clearRequest() {
    this.request.contents = [];
  }

  buildObservation(result) {
    return JSON.stringify({
      type: "OBSERVATION",
      content: JSON.stringify(result),
    });
  }

  pushNextState(query) {
    this.request.contents.push({
      role: "user",
      parts: [{ text: query }],
    });
  }

  getJsonFromResponse() {
    return tryJsonParse(
      this.aiResponse.replace(/```json/g, "").replace(/```/g, "")
    );
  }

  returnLatestState() {
    return this.request.contents[this.request.contents.length - 1].parts[0]
      .text;
  }

  async executeAction(action, input) {
    return TOOLS[action](input);
  }

  async talkToAssistant() {
    let retryCount = 0;
    while (retryCount < 5) {
      try {
        const result = await this.model.generateContent(this.request);
        return result.response.text();
      } catch (error) {
        console.log("Error talking to assistant", error.message);
        retryCount++;
        await sleep(1000 * retryCount);
      }
    }
    return returnLatestState();
  }

  async chat(query) {
    this.pushNextState(query);
    do {
      this.aiResponse = await this.talkToAssistant();

      const json = this.getJsonFromResponse();

      console.log(json.type);

      let nextState = null;

      if (json.type === "ACTION") {
        const { input, function: functionName } = json;
        const result = await this.executeAction(functionName, input);
        nextState = this.buildObservation(result);
      } else if (json.type === "RESPONDING") {
        this.clearRequest();
        return json.response;
      } else {
        nextState = JSON.stringify(json);
      }

      this.pushNextState(nextState);
    } while (true);
  }
}

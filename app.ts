import { App } from "@openai/apps-sdk";

export default new App({
  name: "Hello World ChatGPT",
  description: "My second ChatGPT app using the Apps SDK",

  async run({ input }) {
    return {
      messages: [
        {
          role: "assistant",
          content: `Hello! You said: "${input.text}" 👋`,
        },
      ],
    };
  },
});

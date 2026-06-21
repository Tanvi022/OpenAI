import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

console.log("KEY:", process.env.OPENAI_API_KEY); // check if loaded

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function run() {
  const response = await client.responses.create({
    model: "gpt-5",
    input: "Hello!",
  });

  console.log(response.output_text);
}

run();
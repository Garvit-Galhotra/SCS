import "dotenv/config";
import { tavily } from "@tavily/core";
import readline from "readline/promises";
const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function sendWebSearch({ response }) {
  try {
    const searchResults = await tvly.search(response);
    return searchResults;
  } catch (error) {
    console.error("Error performing web search:", error);
    return "An error occurred while performing the web search.";
  }
}

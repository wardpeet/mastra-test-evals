import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { ToneConsistencyMetric } from "@mastra/evals/nlp";

export const weatherAgent = new Agent({
  name: "Weather Agent",
  instructions: `
      You are a helpful weather assistant that provides accurate weather information.

      Your primary function is to help users get weather details for specific locations. When responding:
      - Always ask for a location if none is provided
      - If giving a location with multiple parts (e.g. "New York, NY"), use the most relevant part (e.g. "New York")
      - Include relevant details like humidity, wind conditions, and precipitation
      - Keep responses concise but informative

      
`,
  model: openai("o3-mini"),
  metrics: {
    tone: new ToneConsistencyMetric(),
  },
});

const fs = require('fs');
const openai = require('openai');

// Set your OpenAI API key
openai.apiKey = process.env.OPENAI_API_KEY;

// Define the prompt
const prompt = "Generate a tweet based on this context:";

// Read the CSV file containing tweets and split into an array of contexts
const tweets = fs.readFileSync('tweet_csv.csv', 'utf-8').split('\n');

// Generate text using GPT-3 for each context
for (const context of tweets) {
  openai.Completion.create({
    engine: 'davinci',
    prompt: `${prompt}\n${context}`,
    maxTokens: 100,
    n: 1,
    temperature: 0.5,
  })
  .then((response) => {
    // Print the generated text
    console.log(response.choices[0].text.trim());
  })
  .catch((err) => {
    console.log(err);
  });
}

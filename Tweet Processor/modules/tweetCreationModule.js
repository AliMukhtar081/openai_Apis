const openai = require('openai');

// Set your OpenAI API key
openai.apiKey = process.env.OPENAI_API_KEY;

async function generateTweet(context, prompt = "Generate a tweet based on this context:") {
  try {
    const response = await openai.Completion.create({
      engine: 'davinci',
      prompt: `${prompt}\n${context}`,
      maxTokens: 100,
      n: 1,
      temperature: 0.5,
    });

    return response.choices[0].text.trim();
  } catch (err) {
    console.log(err);
    return null;
  }
}

module.exports = {
  generateTweet
};
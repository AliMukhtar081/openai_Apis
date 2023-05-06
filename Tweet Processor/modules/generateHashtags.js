const openai = require('openai');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

// Set up OpenAI API client
openai.apiKey = process.env.OPENAI_API_KEY;

// Generate hashtags based on the tweet content
const generateHashtags = async (tweetContent, numberOfHashtags = 3) => {
  try {
    const prompt = `Given the tweet "${tweetContent}", suggest ${numberOfHashtags} relevant hashtags:`;

    const response = await openai.Completion.create({
      engine: 'davinci-codex',
      prompt,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.5,
    });

    const hashtags = response.choices[0].text.trim().split(', ');

    return hashtags;
  } catch (error) {
    console.error('Error generating hashtags:', error);
    return [];
  }
};

module.exports = generateHashtags;

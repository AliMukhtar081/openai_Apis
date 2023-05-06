const fs = require('fs');
const { generateTweet } = require('./modules/tweetCreation');
const analyzeSentiment = require('./modules/sentimentProcessor');

// Read the CSV file containing tweets and split into an array of contexts
const tweets = fs.readFileSync('tweet_csv.csv', 'utf-8').split('\n');

// Generate text using GPT-3 for each context and perform sentiment analysis
(async () => {
  for (const context of tweets) {
    const generatedTweet = await generateTweet(context);
    if (generatedTweet) {
      console.log('Generated Tweet:', generatedTweet);

      const sentimentResult = analyzeSentiment(generatedTweet);
      console.log('Sentiment Analysis:', sentimentResult);
      console.log('----------------------------------');
    }
  }
})();


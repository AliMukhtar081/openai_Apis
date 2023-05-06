const fs = require('fs');
const { generateTweet } = require('./modules/tweetCreation');

// Read the CSV file containing tweets and split into an array of contexts
const tweets = fs.readFileSync('tweet_csv.csv', 'utf-8').split('\n');

// Generate text using GPT-3 for each context
(async () => {
  for (const context of tweets) {
    const generatedTweet = await generateTweet(context);
    if (generatedTweet) {
      console.log(generatedTweet);
    }
  }
})();

const Sentiment = require('sentiment');

const sentiment = new Sentiment();

const analyzeSentiment = (tweet) => {
    const result = sentiment.analyze(tweet);

    if (result.score > 0) {
        return {
            sentiment: 'positive',
            score: result.score,
            comparative: result.comparative
        };
    } else if (result.score < 0) {
        return {
            sentiment: 'negative',
            score: result.score,
            comparative: result.comparative
        };
    } else {
        return {
            sentiment: 'neutral',
            score: result.score,
            comparative: result.comparative
        };
    }
};

module.exports = analyzeSentiment;

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
$(document).ready(function() {
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
// const $tweets = tweets.map();;
//   createTweetElement(tweets);
//   $('#tweets-container').append($tweets);
for(let tweet of tweets){
  let output = createTweetElement(tweet);
  $(`#tweets-container`).append(output);
}
}

// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container


const createTweetElement = function(tweet) {
// let $tweet = $('<article>').addClass('tweet');
console.log("did we make it")
  const $tweets = (`
    <article class='tweets'>
      <header>
        <img src="${tweet.user.avatars}">
        ${tweet.user.name}
      <a class='tweet-handle'>${tweet.user.handle}</a>
      </header>
      <span class='tweet-body'>${tweet.content.text}</span>
      <footer>
        <h6 class="tweet-age">${tweet.created_at}</h6>
        <div class='tweet-icon'>
          <i class="fa fa-flag"></i>
          <i class="fa fa-heart"></i>
          <i class="fa fa-refresh"></i>
        </div>
      </footer>
    </article>
  `);

  return $tweets;
};
renderTweets(data);

});

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
$(document).ready(function() {
  $('#tweet-form').on("submit", function(event) {
    event.preventDefault();
    let tweetBody = $(this).serialize();
    if (!$('.tweet-text-area').val()) {
    alert("There needs to be something to tweet!");
    }if ($('.tweet-text-area').val().length > 140){
      alert("There are too many characters!");
    }
    $.ajax({
      method: "POST",
      url: '/tweets',
      data: tweetBody
    })
    .then(loadTweets);
  });
  
  const loadTweets = () => { 
    $.get('/tweets', function(res){
      renderTweets(res);
    });
  }
const renderTweets = function(tweets) {
  $('#tweets-container').empty();
for(let tweet of tweets){
  let output = createTweetElement(tweet);
  $(`#tweets-container`).prepend(output);
}
};

// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
const escape =  function(str) {
  let div = $("<div>").text(str);
  
  return div[0].innerHTML;
}

const createTweetElement = function(tweet) {
  let date = new Date(tweet.created_at).toDateString();
  // console.log("did we make it")
  // let $tweet = $('<article>').addClass('tweet');
  const $tweets = (`
    <article class='tweets'>
      <header>
        <img src="${tweet.user.avatars}">
        ${tweet.user.name}
      <a class='tweet-handle'>${tweet.user.handle}</a>
      </header>
      <span class='tweet-body'>${escape(tweet.content.text)}</span>
      <footer>
        <h6 class="tweet-age">${date}</h6>
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
// renderTweets();

});

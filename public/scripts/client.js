/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  const tweet = (tweetObj) => {
    const $tweet = $(
      `<article class="tweet grow-tweet">
    <header class="header">
      <div class="flex-row ai-center">
        <img class="avatar" src="${tweetObj.user.avatars}">
        <h2 class="name">${tweetObj.user.name}</h2>
      </div>
      <h3 class="handle">${tweetObj.user.handle}</h3>
    </header>
    <div class="text-area text-black strong">
      <p class="ml-1">${tweetObj.content.text}</p>
    </div>
    <footer class="footer strong">
      <p class="small">${timeago.format(tweetObj.created_at)}</p>
      <p><i class="grow-icon far fa-flag mr-1"></i><i class="grow-icon fas fa-retweet mr-1"></i><i class="grow-icon far fa-heart"></i></p>
    </footer>
  </article>`
    );
  
    return $tweet;
  };

  const renderTweets = (tweetsArr) => {
    const $tweet = tweet(tweetData);
    $('#tweets-area').append($tweet);
    console.log('Tweeted!', $tweet);
  };
  
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };
  
  
  // Test / driver code (temporary)
  // to see what it looks like
});
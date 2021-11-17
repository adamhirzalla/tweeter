/* eslint-disable camelcase */
/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  $('#tweet-form').submit(function(event) {
    event.preventDefault();
    const tweetText = $(this).serialize();
    console.log(tweetText);
    $.ajax({
      type: "POST",
      url: '/tweets/',
      data: tweetText,
    });
  });

  const tweet = (tweetObj) => {
    const { user, content, created_at } = tweetObj;
    const $tweet = $(
      `<article class="tweet grow-tweet">
    <header class="header">
      <div class="flex-row ai-center">
        <img class="avatar" src="${user.avatars}">
        <h2 class="name">${user.name}</h2>
      </div>
      <h3 class="handle">${user.handle}</h3>
    </header>
    <div class="text-area text-black strong">
      <p class="ml-1">${content.text}</p>
    </div>
    <footer class="footer strong">
      <p class="small">${timeago.format(created_at)}</p>
      <p><i class="grow-icon far fa-flag mr-1"></i><i class="grow-icon fas fa-retweet mr-1"></i><i class="grow-icon far fa-heart"></i></p>
    </footer>
  </article>`
    );
    return $tweet;
  };

  const renderTweets = (tweetsArr) => {
    for (const tweetObj of tweetsArr) {
      const $tweet = tweet(tweetObj);
      $('#tweets-area').append($tweet);
      console.log('Tweeted!', $tweet);
    }
    
  };

  const loadTweets = () => {
    $.ajax('/tweets/', { method: 'GET' })
      .then(function(data) {
        console.log('Success: ', data);
        renderTweets(data);
      });
  };
  
  // Test / driver code (temporary). Eventually will get this from the server.
  loadTweets();
});
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  /* On 'submit' event:
    1- Validate if tweet is empty
    2- Validate if tweet exceeds length
    3- Make a post request with the serialized data from textarea
    4- Once done, load the tweets again to avoid refreshing
    4- Empty out the textarea
    5- Trigger an 'input' event for the counter to update/reset
  */
  $('#tweet-form').submit(function(event) {
    event.preventDefault();
    const $tweetText = $(this);
    const tweetText = $tweetText.serialize();
    const $textarea = $('#tweet-text');
    if (!$textarea.val() || $textarea.val() === "") {
      alert('Tweet cannot be empty!');
    } else if (tweetText.length > 140) {
      alert('Tweet length cannot exceed 140 characters!');
    } else {
      $.ajax({
        type: "POST",
        url: '/tweets/',
        data: tweetText,
      })
        .then(() => {
          loadTweets();
          console.log('Success!');
          $textarea.val('');
          $textarea.trigger('input');
        });
    }
  });

  /* tweet:
    1- Receive a single tweet object
    2- Use AJAX to create an article element using passed data
  */
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

  /* renderTweets:
    1- Receive an array of tweet objects
    2- Iterate through the array and call 'tweet' on each object
  */
  const renderTweets = (tweetsArr) => {
    for (const tweetObj of tweetsArr) {
      const $tweet = tweet(tweetObj);
      $('#tweets-area').prepend($tweet);
    }
  };

  /* loadTweets:
    1- Make an AJAX GET request to our local-db on server
    2- Once done, use the JSON data received to call renderTweets
    * This will allow us to see the new content without refreshing *
  */
  const loadTweets = () => {
    $.ajax('/tweets/', { method: 'GET' })
      .then(function(data) {
        renderTweets(data);
        console.log('Loaded fresh tweets: ', data);
      });
  };
  
  // Load initial hardcoded tweets
  loadTweets();
});
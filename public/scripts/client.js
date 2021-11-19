/* eslint-disable camelcase */
/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  // Initial error message hide
  $('#error').hide();
  
  /* On 'submit' event:
    1- Validate if tweet is empty (all-spaces is considered empty)
    2- Validate if tweet exceeds length
     * If invalid, prompt appropriate message and re-focus without POSTing*
     * If valid, proceed*
    3- Make a POST request with the serialized data from textarea
    4- Once done, load the tweets again through an AJAX request to avoid refreshing
    5- Empty out the textarea
    6- Trigger an 'input' event for the counter to update/reset
  */
  $('#tweet-form').submit(function(event) {
    event.preventDefault();
    const $tweetText = $(this);
    const serialized = $tweetText.serialize();
    const $textarea = $('#tweet-text');
    const input = $textarea.val();
    if (!input || !input.trim().length) {
      $textarea.focus();
      $('#error').text('Tweet cannot be empty!');
      $('#error').slideDown('fast');
    } else if (input.length > 140) {
      $textarea.focus();
      $('#error').text('Tweet length cannot exceed 140 characters!');
      $('#error').slideDown('fast');
    } else {
      $('#error').slideUp('fast');
      $.ajax({
        type: "POST",
        url: '/tweets/',
        data: serialized,
      })
        .then(() => {
          loadTweets();
          $textarea.val('');
          $textarea.trigger('input');
        });
    }
  });

  /* escape:
    1- Receive potentially unsafe string literal
    2- Create a <div> element
    3- Create a text node using passed test
    4- Append that text node as a child to our created <div>
    4- Return back the safe re-encoded/escaped HTML of that <div>
  */
  const escape = (text) => {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  };

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
      <p class="ml-1">${escape(content.text)}</p>
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
        $('#tweets-area').empty();
        renderTweets(data);
      });
  };
  
  // Load initial hardcoded tweets
  loadTweets();
});
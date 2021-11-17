$(document).ready(()=>{
  // COUNTER: TO SHOW CHARACTERS REMAINING WITHIN TWEETS TEXT AREA //
  //
  // On document ready:
  // Listen for input events on #tweet-text and run callback accordingly
  // this === <textarea>
  // Saving JQuery target for counter class in $counter
  // Computing the new value of counter
  // Change counter color to yellow if between 70 and 0
  // Change counter color to red if below 0
  // Update counter value on each input event
  $("#tweet-text").on('input', function() {
    const $counter = $(this).parentsUntil('.new-tweet').find('.counter');
    const charsRemaining = 140 - $(this).val().length;

    $counter.toggleClass('color-yellow', charsRemaining <= 70 && charsRemaining >= 0);
    $counter.toggleClass('color-red', charsRemaining < 0);

    $counter.text(charsRemaining);
  });
});
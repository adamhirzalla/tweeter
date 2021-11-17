$(document).ready(()=>{
  // COUNTER: TO SHOW CHARACTERS REMAINING WITHIN TWEETS TEXT AREA //
  //
  // On document ready:
  // Listen for input events on #tweet-text and run callback accordingly
  // this === <textarea>
  // Saving JQuery target for counter class in $counter
  // Computing the new value of counter
  // Change counter color to red if below 0
  // Update counter value on each input event
  $("#tweet-text").on('input', function() {
    const $counter = $(this).parent().siblings().find('.counter');
    const counter = 140 - $(this).val().length;
    counter <= 70 && counter >= 0 ?
      $counter.addClass('color-yellow') :
      counter < 0 ?
        $counter.removeClass('color-yellow') && $counter.addClass('color-red') :
        $counter.removeClass('color-red') && $counter.removeClass('color-yellow');

    $counter.text(counter);
  });
});
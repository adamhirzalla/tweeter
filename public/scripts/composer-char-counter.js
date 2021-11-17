$(document).ready(()=>{
  // Listen for input events on #tweet-text and run callback accordingly
  $("#tweet-text").on('input', function() {
    // Saving JQuery target for counter class in $counter
    const $counter = $(this).parent().siblings().find('.counter');
    // Computing the new value of counter
    const counter = 140 - $(this).val().length;
    // Change counter color to red if below 0
    counter < 0 ? $counter.addClass('text-red') : $counter.removeClass('text-red');
    // Update counter value on each input event
    $counter.text(counter);
  });
});
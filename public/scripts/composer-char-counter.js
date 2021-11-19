$(document).ready(()=>{

  /* Counter: to show remaining characters within tweet textarea
     * Upon any 'input' event, slide-up (hide) error message until next submit *
    1- On document ready, listen for 'input' events on #tweet-text
     * this === <textarea> *
    2- Save JQuery target for counter class in $counter
    3- Compute the new value of counter
    4- Change counter color to yellow if between 70 and 0
     - Change counter color to red if below 0
    5- Update counter value on each input event
  */
  $("#tweet-text").on('input', function() {
    $('#error').slideUp('fast');
    const $counter = $(this).parentsUntil('.new-tweet').find('.counter');
    const charsRemaining = 140 - $(this).val().length;

    $counter.toggleClass('color-yellow', charsRemaining <= 70 && charsRemaining >= 0);
    $counter.toggleClass('color-red', charsRemaining < 0);

    $counter.text(charsRemaining);
  });
});
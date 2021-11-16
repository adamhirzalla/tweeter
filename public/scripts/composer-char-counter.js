$(document).ready(()=>{
  $("#tweet-text").on('input', function() {
    const $counter = $(this).parent().siblings().find('.counter');
    const counter = 140 - $(this).val().length;
    counter < 0 ? $counter.addClass('text-red') : $counter.removeClass('text-red');
    $counter.text(counter);
  });
});
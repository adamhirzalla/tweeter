$(document).ready(() => {
  // Initial back-to-top button hide
  $('.btn-top').hide();

  /* On back-to-top 'click' event:
    1- Scroll all the way top
    2- Focus the text area for composing tweets
  */
  $('.btn-top').click(() => {
    const $top = document.getElementById('top');
    
    $top.scrollIntoView();
    $('#tweet-text').focus();
  });

  /* On 'scroll' event:
    1- If the scroll view is more than 100px vertically from the top,
    2- Show the button
    2- Otherwise, hide the button
  */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 130) {
      console.log($(this).scrollTop());
      $('body nav').removeClass('nav-sticky');
      $('.btn-top').show();
    } else {
      $('body nav').addClass('nav-sticky');
      $('.btn-top').hide();
    }
  });
});
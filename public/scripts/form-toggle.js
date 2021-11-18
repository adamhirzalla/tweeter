$(document).ready(() => {
  $('.btn-top').hide();
  $('.btn-toggle').click(() => {
    const $top = document.getElementById('top');
    
    $top.scrollIntoView();
    $('.new-tweet').toggle('fast',()=>{
      $('#tweet-text').focus();
    });
  });

  $('.btn-top').click(() => {
    const $top = document.getElementById('top');
    
    $top.scrollIntoView();
    $('#tweet-text').focus();
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.btn-top').show();
    } else {
      $('.btn-top').hide();
    }
  });
});

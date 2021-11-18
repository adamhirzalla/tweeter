$(document).ready(() => {
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
});

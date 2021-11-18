$(document).ready(() => {

  /* On create-new-tweet 'click' event:
    1- Scroll all the way top
    2- Toggle the new-tweet area (show/hide)
    2- Once done, focus the text area for composing tweets
  */
  $('.btn-toggle').click(() => {
    const $top = document.getElementById('top');
    
    $top.scrollIntoView();
    $('.new-tweet').toggle('fast',()=>{
      $('#tweet-text').focus();
    });
  });
});

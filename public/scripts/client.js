// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

$.ajax({
  url: '/tweets',
  method: 'GET',
  data:'json',
  success: function(data) {
    for(const i of data) {
      i.created_at = timeago.format(i.created_at)
      console.log(i.created_at)
    }
    const elements = renderTweets(data);
    $('#tweets-container').append(elements)
    }
  })
 
const createTweetElement = function(tweet) {
  let $tweet = `
  <article>
  <header>
    <div>
      <div><img class="img2" src="${tweet.user.avatars}"></div>
      <div>${tweet.user.name}</div>
    </div>
    <div>${tweet.user.handle}</div>
  </header>
  <div class="inputText"><p>${tweet.content.text}</p></div>
  <hr>
  <footer>
    <div><p class="time">Posted ${tweet.created_at}"</p></div>
    <div class="symbol">
      <span><i class="fa-solid fa-flag"></i></span>
      <span><i class="fa-solid fa-retweet"></i></span>
      <span><i class="fa-solid fa-heart"></i></span>
    </div>
  </footer>
</article>
  `
  return $tweet;
}
const renderTweets = function(tweets) {
  return tweets.map(tweet => createTweetElement(tweet)).reverse();
}

$(document).ready(function() {
  const submitform = $('.form-submit')
  submitform.submit((event) => {
    event.preventDefault(); //avoid to reload or visit route
    // console.log( $( this ).serialize() );
    const queryString = submitform.serialize();
    const input = decodeURI(queryString).slice(5);
    $('.alert1').hide();
    $('.alert2').hide();
    //send querystring data
    console.log(input)
    if (input.length > 140) {
      $('.alert1').show();
      return;
    }  
    
    if (!input){
      $('.alert2').show();
      return;
    }

    $.ajax({
        url: '/tweets',
        method: 'POST',
        data: queryString, 
        success: function() {
          $.ajax({
            url: '/tweets',
            method: 'GET',
            data:'json',
            success: function(data) { 
              user = data[data.length - 1];
              user.created_at = timeago.format(user.created_at);
              const element = createTweetElement(user);
              $('#tweets-container').prepend(element);
              $('#tweet-text').val('');
              $('.counter').text(140);
            }
          })
        }    
      })
    
  })   
})
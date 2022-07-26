
  $(document).ready(function() {

  // --- our code goes here ---
  $('#tweet-text').on('input', function() {
    let content = $(this).val();
    // console.log(content.length);
    let len = content.length;
    $('.counter').text(140 -len);
    if (len > 140) {
      $('.counter').css('color', 'red')
    }
    else {
      $('.counter').css('color', 'black')  
    }
  })
  
})

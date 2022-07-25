
  $(document).ready(function() {

  // --- our code goes here ---
  $('#tweet-text').keyup(function() {
    this.focus();
    let content = $(this).val();
    // console.log(content.length);
    let len = content.length;
    $('.counter').text(140 -len);
    if (len > 140) {
      $('.counter').css('color', 'red')
      return false; 
    } else if (len === 0) {
      return false;   
    }
    else {
      $('.counter').css('color', 'black')  
    }
  })
  
})

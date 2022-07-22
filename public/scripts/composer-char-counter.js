
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
      // $('.alert1').show();
      // $('.alert2').hide();
      return false; 
    } else if (len === 0) {
      // $('.alert2').show();
      // $('.alert1').hide();
      return false;   
    }
    else {
      $('.counter').css('color', 'black')
      // $('.alert2').hide();
      // $('.alert1').hide();    
    }
  })
  
})

$('#tweet-text').submit(function() {
  let content = $(this).val();
  let len = content.length;
  $('.counter').text(140 -len);
})
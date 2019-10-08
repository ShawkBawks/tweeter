console.log('did it show?');
$(document).ready(function() {
  $('textarea').on("keyup", function(){
    let maxLength = 140;
    let currentLength = $(this).val().length;
        $('.counter').html(maxLength - currentLength);
        if(currentLength > 140){
          $('.counter').css("color", "red");
        } else {
          $('.counter').css("color", "#545149");
        }
  });
});    
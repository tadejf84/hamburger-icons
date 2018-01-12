$(document).ready(function(){
  $('.icon-1,.icon-2').on('click', function(){
    if($(this).hasClass('closed')) {
      $(this).removeClass('closed');
      $('nav').removeClass('active');
    } else {
      $(this).addClass('closed');
      $('nav').addClass('active');
    }
  });
});

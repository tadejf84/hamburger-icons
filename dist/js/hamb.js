$(document).ready(function(){
  $('.icon').on('click', function(){
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('nav').removeClass('active');
    } else {
      $(this).addClass('active');
      $('nav').addClass('active');
    }
  });
});

$(document).ready(function(){
  $('.icon-1,.icon-2,.icon-3,.icon-4,.icon-5').on('click', function(){
    if($(this).hasClass('closed')) {
      $(this).removeClass('closed');
      $('nav').removeClass('active');
    } else {
      $(this).addClass('closed');
      $('nav').addClass('active');
    }
  });
});

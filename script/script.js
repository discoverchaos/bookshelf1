$(document).ready(function(){
    $('.menu__item').click(function(){
      $('.menu__item').removeClass('active');
      $(this).addClass('active');
    });
  });
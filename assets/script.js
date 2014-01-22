$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // console.log(scroll);
    if (100 > scroll) {
      if (!$('.circle-portrait').eq(0).hasClass('alt')) {
          $('.circle-portrait').eq(0).addClass('alt');
        }
      if ($('.circle-portrait').eq(1).hasClass('alt')) {
          $('.circle-portrait').eq(1).removeClass('alt'); 
        }
      }
    if (719 > scroll && scroll > 300) {
      if (!$('.circle-portrait').eq(1).hasClass('alt')) {
          $('.circle-portrait').eq(1).addClass('alt');
        }
      if ($('.circle-portrait').eq(2).hasClass('alt')) {
          $('.circle-portrait').eq(2).removeClass('alt'); 
        }
      }
    if (scroll > 660) {
      if (!$('.circle-portrait').eq(2).hasClass('alt')) {
          $('.circle-portrait').eq(2).addClass('alt'); 
        }
      if ($('.circle-portrait').eq(3).hasClass('alt')) {
          $('.circle-portrait').eq(3).removeClass('alt'); 
        }
      }      
    if (scroll > 800) {
      if (!$('.circle-portrait').eq(3).hasClass('alt')) {
          $('.circle-portrait').eq(3).addClass('alt');
        }
      if ($('.circle-portrait').eq(4).hasClass('alt')) {
          $('.circle-portrait').eq(4).removeClass('alt');
        }
      }      
    if (scroll > 1000) {
      if (!$('.circle-portrait').eq(4).hasClass('alt')) {
          $('.circle-portrait').eq(4).addClass('alt');
        }
      }      
  });
  $("#crains").fancybox();
});

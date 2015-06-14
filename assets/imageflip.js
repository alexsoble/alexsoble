function flipImage (image) {
  if (!(image.hasClass("alt"))) {
    image.addClass("alt")
  }
  console.log('flipping');
}

function unflipImage (image) {
  if (image.hasClass("alt")) {
    image.removeClass("alt")
  }
}

function fetchImage (imagenumber) {
  return $('.circle-portrait').eq(imagenumber)
}

$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 1400) {
      flipImage(fetchImage(4));
    } else if (scroll > 1200) {
      flipImage(fetchImage(3));
      unflipImage(fetchImage(4));
    } else if (scroll > 700) {
      flipImage(fetchImage(2));
      unflipImage(fetchImage(3));
    } else if (600 > scroll) {
      flipImage(fetchImage(1));
      unflipImage(fetchImage(2));
    } else if (300 > scroll) {
      flipImage(fetchImage(0));
      unflipImage(fetchImage(1));
    } else if (100 > scroll) {
      unflipImage(fetchImage(0));
    }
  });
  $("#crains").fancybox();
});

$(document).ready(function () {
  $('.slider-main').bxSlider({
    pager: false,
    auto: true,
    nextText: '',
    prevText: ''
  });
  $('.slider-partner').bxSlider({
    pager: false,
    minSlides: 4,
    maxSlides: 6,
    moveSlides: 2,
    slideWidth: 200
  });
  
  if (window.addEventListener) {
    var state = 0,
      akbk = [65, 75, 66, 75, 49, 48, 48];
    window.addEventListener("keydown", function (e) {
      if (e.keyCode == akbk[state]) state++;
      else state = 0;
      if (state == 7)
        $('body').css('filter', 'sepia(100%)');
    }, true);
  }
  
});

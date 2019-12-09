'use strict';
var mobileMaxWidth = '(max-width: 767px)';
var tabletMaxWidth = '(max-width: 1023px)';
// var itemSlides;

// if (window.matchMedia(mobileMaxWidth).matches) {
//   itemSlides = 1;
// } else if (window.matchMedia(tabletMaxWidth).matches) {
//   itemSlides = 2;
// } else {
//   itemSlides = 4;
// }

var slider = tns({
  'container': '.trainers-carousel__list',
  'prevButton': '.trainers-carousel__arrow--left',
  'nextButton': '.trainers-carousel__arrow--right',
  'preventActionWhenRunning': true,
  'slideBy': 'page',
  'autoWidth': true,
  'nav': false,
  'speed': 600,
  'items': 1,
  'responsive': {
    '767': {
      'items': 2,
    },
    '1023': {
      'items': 4,
      'gutter': 40,
    },
  },
});

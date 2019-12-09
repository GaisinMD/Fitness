'use strict';
var mobileMaxWidth = '(max-width: 767px)';
var tabletMaxWidth = '(max-width: 1023px)';
var itemSlides;

if (window.matchMedia(mobileMaxWidth).matches) {
  itemSlides = 1;
} else if (window.matchMedia(tabletMaxWidth).matches) {
  itemSlides = 2;
} else {
  itemSlides = 4;
}

var slider = tns ({
  'container': '.trainers-carousel__list',
  'prevButton': '.trainers-carousel__arrow--left',
  'nextButton': '.trainers-carousel__arrow--right',
  'items': itemSlides,
  'fixedWidth': 260,
  'gutter': 40,
  'nav': false,
  'slideBy': 'page',
  'swipeAngle': false,
  'speed': 600
});

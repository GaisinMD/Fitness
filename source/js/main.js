'use strict';

var sliderTrainers = tns({
  'container': '.trainers-carousel__list',
  'prevButton': '.trainers-carousel__arrow--left',
  'nextButton': '.trainers-carousel__arrow--right',
  'preventActionWhenRunning': true,
  'slideBy': 'page',
  'autoWidth': true,
  'nav': false,
  'speed': 600,
  'items': 1,
  'gutter': 0,
  'responsive': {
    '767': {
      'items': 2,
      'gutter': 30,
    },
    '1199': {
      'items': 4,
      'gutter': 40,
    },
  },
});

var sliderFeedback = tns({
  'container': '.feedback-carousel__list',
  'prevButton': '.feedback-carousel__arrow--left',
  'nextButton': '.feedback-carousel__arrow--right',
  'preventActionWhenRunning': true,
  'slideBy': '1',
  'autoWidth': true,
  'nav': false,
  'speed': 600,
  'items': 1,
  'gutter': 0,
});

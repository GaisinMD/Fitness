'use strict';
// переменные скролла
var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
var animationTime = 300;
var framesCount = 20;

// переменные маски ввода телефона
var customValidityMessage = 'Телефонный номер - минимум 10 символов';
var submit = document.querySelector('.form__button');
var element = document.getElementById('phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

// реализация маски ввода телефона
var mask = IMask(element, maskOptions);

//валидация длины ввода
submit.addEventListener('click', function (evt) {
  if (element.validity.tooShort) {
    element.setCustomValidity(customValidityMessage);
  } else {
    element.setCustomValidity('');
  }
});

// реализация скролла
anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    var scroller = setInterval(function () {
      var scrollBy = coordY / framesCount;

      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

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
  'autoHeight': true,
  'nav': false,
  'speed': 600,
  'items': 1,
  'gutter': 0,
});

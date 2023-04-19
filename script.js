var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 500,

  // Enable touch events
  touchEventsTarget: 'wrapper',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

// Add touch-based swiping
mySwiper.on('touchStart', function() {
  // Disable autoplay when user starts swiping
  mySwiper.autoplay.stop();
});

mySwiper.on('touchEnd', function() {
  // Resume autoplay when user stops swiping
  mySwiper.autoplay.start();
});

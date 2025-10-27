  const swiper = new Swiper('.course__reviews-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    speed: 500,
    navigation: {
      nextEl: '.course__reviews-btn--next',
      prevEl: '.course__reviews-btn--prev',
    },
    allowTouchMove: true,
    watchOverflow: true,
    resistance: true,
    resistanceRatio: 0,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        watchOverflow: true,
        resistance: true,
        resistanceRatio: 0,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 20,
      }
    }
  });
document.addEventListener('DOMContentLoaded', function() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  // Initialize Swiper for each tab
  const allSlider = new Swiper('#all .works-slider', swiperOptions);
  const webSlider = new Swiper('#web .works-slider', swiperOptions);
  const mobileSlider = new Swiper('#mobile .works-slider', swiperOptions);
});
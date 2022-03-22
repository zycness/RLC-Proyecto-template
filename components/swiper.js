var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

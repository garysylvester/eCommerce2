var Swipes = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 16,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
  },
});
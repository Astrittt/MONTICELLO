var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function () {
  $('.news__inner').slick({
    autoplay: false,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    infinite: true,
    slidesToShow: 3,
    arrows:true,
    prevArrow: '.prev-arrow',
    nextArrow: '.next-arrow',
  });
});
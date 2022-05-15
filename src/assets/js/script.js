var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// let listContainer = document.getElementsByClassName('main-nav__list')
// let lists = listContainer.getElementsByClassName('active')
// for (var i = 0; i < lists.length; i++) {
//   lists[i].addEventListener("click", function() {
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
$(document).ready(function () {
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
      991: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      290: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
    loop: true,
  });
  console.log(mySwiper);
  // Мобильно меню
  const mMenuBtn = $(".burger");
  const mMenuBurger = $(".burger__menu");
  const mMenu = $(".m-menu");
  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    mMenuBurger.toggleClass("touched");
    $("body").toggleClass("no-scroll");
  });
});

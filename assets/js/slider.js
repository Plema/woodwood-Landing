$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    draggable: false,
    swipe: true,
    waitForAnimate: false,
  });
});

$(document).ready(function () {
  // preloader
  $(document).ready(function () {
    $('.preloader').delay(1000).fadeOut('slow')
  })

  if ($(window).width() >= 1024) {
    // full page
    $('.fullpage').fullpage({
      anchors: [
        'section1',
        'section2',
        'section3',
        'section4',
        'section5',
        'section6',
        'section7',
        'section8',
      ],
      scrollingSpeed: 1000,
      scrollOverflow: true,

      onLeave: function (origin, destination, direction) {
        var loadedSection = this
        let pseudoParallax = $('.portfolio__title_img')

        if ($(window).width() >= 1024) {
          function showMenu() {
            $('.header__info').css({ right: '0' })
          }
          function hideMenu() {
            $('.nav__toggle').css({ right: '0' })
          }
          function showMenuLine() {
            $('.header__info_line').css({ right: '0px' })
          }
          function hideMenuLine() {
            $('.nav__toggle_line').css({ right: '0px' })
          }

          if (direction == 'down') {
            $('.header__info, .header__info_line').css({ right: '-300px' })
            $('.nav__toggle, .nav__toggle_line').removeClass('active')
            $('.nav__toggle_btn').find('i').removeClass('icon-close')
            $('.nav__toggle_btn').find('i').addClass('icon-menu')

            setTimeout(hideMenu, 200)
            setTimeout(hideMenuLine, 200)

            $(window).on('mouseenter', function () {
              if ($('.nav__toggle, .nav__toggle_line').hasClass('active')) {
                $('.nav__toggle, .nav__toggle_line').css({ right: '-50px' })

                setTimeout(showMenu, 200)
                setTimeout(showMenuLine, 200)
              }
            })
            // $(document).click(function (e) {
            //     var btn = $('.nav__toggle');
            //     if (!btn.is(e.target) && btn.has(e.target).length === 0) {
            //         $('.header__info').css({'right': '-300px'});
            //         $('.nav__toggle').removeClass('active');
            //         $('.nav__toggle_btn').find('i').removeClass('icon-close');
            //         $('.nav__toggle_btn').find('i').addClass('icon-menu');

            //         setTimeout(hideMenu, 300);
            //     }
            // });
            $('.header__info').on('mouseleave', function () {
              setTimeout(hideMenu, 300)
              setTimeout(function () {
                $('.header__info').css({ right: '-300px' })
                $('.nav__toggle').removeClass('active')
                $('.nav__toggle_btn').find('i').removeClass('icon-close')
                $('.nav__toggle_btn').find('i').addClass('icon-menu')
              }, 301)
            })
          } else if (origin.index == 1 && direction == 'up') {
            $('.nav__toggle').css({ right: '-50px' })
            $('.header__info_line').css({ right: '-300px' })
            $('.nav__toggle_line').removeClass('active')

            setTimeout(showMenu, 200)
            setTimeout(hideMenuLine, 200)
          } else if (direction == 'up') {
            $('.header__info, .header__info_line').css({ right: '-300px' })
            $('.nav__toggle, .nav__toggle_line').removeClass('active')
            $('.nav__toggle_btn').find('i').removeClass('icon-close')
            $('.nav__toggle_btn').find('i').addClass('icon-menu')

            setTimeout(hideMenu, 200)
            setTimeout(hideMenuLine, 200)
          } else if (origin.index == 5 && direction == 'down') {
            // video in gallery
            $('.project__slider_nav').on(
              'afterChange',
              function (event, slick, currentSlide) {
                if ($('.video-item').hasClass('slick-current')) {
                  var video_data = $('iframe').data('src')
                  $('iframe').attr('src', video_data)
                } else {
                  $('.slider__img_item iframe').attr('src', '')
                }
              }
            )
          }

          if (origin.index == 7 && direction == 'down') {
            setTimeout(showMenu, 200)
            setTimeout(function () {
              $('.nav__toggle').css({ right: '-50px' })
            }, 201)
          }

          if (origin.index == 3 && direction == 'down') {
            pseudoParallax.addClass('parallax')
          } else {
            pseudoParallax.removeClass('parallax')
          }
        }
      },
    })
  }
  // setTimeout(function(){
  //     $.fn.fullpage.reBuild();
  // }, 1000);

  $(window).scroll(function () {
    $('.header__info_line').css({ right: '-300px' })
    $('.nav__toggle_line').removeClass('active')
    $('.nav__toggle_line .nav__toggle_btn').find('i').removeClass('icon-close')
    $('.nav__toggle_line .nav__toggle_btn').find('i').addClass('icon-menu')

    hideMenuLine()
  })

  // Pseudoparallax
  $(window).scroll(function () {
    var hT = $('.portfolio__title_img').offset().top,
      hH = $('.portfolio__title_img').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop()
    if (wS > hT + hH - wH) {
      $('.portfolio__title_img').addClass('parallax-mob')
    } else {
      $('.portfolio__title_img').removeClass('parallax-mob')
    }
  })

  //Slider for tents
  $(document).ready(function () {
    $('.tent-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.tent__title_slider',
    })
    $('.tent__title_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.tent-slider',
      focusOnSelect: true,
      centerMode: true,
      prevArrow: $('.prev-tent'),
      nextArrow: $('.next-tent'),
      // variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    })
  })

  // Slider kitchen
  const swiper = new Swiper('.swiper-container', {
    spaceBetween: -20,
    slidesPerView: 1.5,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
    roundLengths: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      414: {
        spaceBetween: -60,
      },
      768: {
        spaceBetween: -60,
      },
      1024: {
        spaceBetween: -300,
      },
      1280: {
        spaceBetween: -350,
      },
      1440: {
        spaceBetween: -350,
      },
      1600: {
        spaceBetween: -500,
      },
    },
  })

  //MAP
  $('.group').on('mouseenter', function () {
    var link = $(this).find('.map-link').data('map')
    $('.' + link).removeClass('on')
    $('.' + link).addClass('yes')
    $('.scroll-icon').removeClass('show-scroll')

    let numberOfImg = $(this).find('.map-link').data('img')
    $('.maps').append(
      `<img class="info-img info-img${numberOfImg}" src="/wp-content/themes/alliance/img/map-img/${numberOfImg}.png">`
    )
  })
  $('.group').on('mouseenter', function () {
    if ($('.map-item').hasClass('yes')) {
      $(this).removeClass('group')
      $('.group').addClass('hide')
    }
  })

  $('.group').on('mouseleave', function () {
    var link = $(this).find('.map-link').data('map')
    $('.' + link).removeClass('yes')
    $('.' + link).addClass('on')

    $('.maps').find('.info-img').remove()
  })
  $('.group').on('mouseleave', function () {
    if ($('.map-item').hasClass('on')) {
      $(this).addClass('group')
      $('.group').removeClass('hide')
    }
  })

  // Complex slider
  $('.complex-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 7000,
  })

  // Scroll animation for map
  $(window).scroll(function () {
    var heightTop = $('.maps').offset().top,
      windowScroll = $(this).scrollTop() + 300
    if (windowScroll > heightTop) {
      $('.scroll-icon').addClass('show-scroll')
    } else {
      $('.scroll-icon').removeClass('show-scroll')
    }
  })
  $('.maps').scroll(function () {
    if (this.scrollLeft >= 10) {
      $('.scroll-icon').removeClass('show-scroll')
    } else if (this.scrollLeft == 0) {
      $('.scroll-icon').addClass('show-scroll')
    }
  })

  // Show/hide nav on main
  $('.nav__toggle').on('mouseenter', function (e) {
    e.preventDefault()

    $(this).toggleClass('active')
    if ($('.nav__toggle').hasClass('active')) {
      $('.nav__toggle_btn').find('i').removeClass('icon-menu')
      $('.nav__toggle_btn').find('i').addClass('icon-close')
      $('.header__info').addClass('active')
    } else {
      $('.nav__toggle_btn').find('i').removeClass('icon-close')
      $('.nav__toggle_btn').find('i').addClass('icon-menu')
      $('.header__info').removeClass('active')
    }
  })

  $(document).mouseup(function (e) {
    var btn = $('.nav__toggle')
    if (!btn.is(e.target) && btn.has(e.target).length === 0) {
      $('.nav__toggle').removeClass('active')
      $('.nav__toggle_btn').find('i').removeClass('icon-close')
      $('.nav__toggle_btn').find('i').addClass('icon-menu')
      $('.header__info').removeClass('active')
    }
  })
  // Show/hide nav for another pages
  function showMenuLine() {
    $('.header__info_line').css({ right: '0px' })
  }
  function hideMenuLine() {
    $('.nav__toggle_line').css({ right: '0px' })
  }

  $('.nav__toggle_line').on('mouseenter', function (e) {
    e.preventDefault()

    $(this).toggleClass('active')
    if ($('.nav__toggle_line').hasClass('active')) {
      $('.nav__toggle_btn').find('i').removeClass('icon-menu')
      $('.nav__toggle_btn').find('i').addClass('icon-close')
      $('.header__info_line').addClass('active')
    } else {
      $('.nav__toggle_btn').find('i').removeClass('icon-close')
      $('.nav__toggle_btn').find('i').addClass('icon-menu')
      $('.header__info_line').removeClass('active')
    }
    if ($('.nav__toggle_line').hasClass('active')) {
      $('.nav__toggle_line').css({ right: '-50px' })

      setTimeout(showMenuLine, 200)
    }
  })

  // $(document).click(function (e) {
  //     var btn = $('.nav__toggle_line');
  //     if (!btn.is(e.target) && btn.has(e.target).length === 0) {
  //         $('.header__info_line').css({'right': '-300px'});
  //         $('.nav__toggle_line').removeClass('active');
  //         $('.nav__toggle_line .nav__toggle_btn').find('i').removeClass('icon-close');
  //         $('.nav__toggle_line .nav__toggle_btn').find('i').addClass('icon-menu');

  //         setTimeout(hideMenuLine, 300);
  //     }
  // });

  $('.header__info_line').on('mouseleave', function () {
    setTimeout(hideMenuLine, 300)
    setTimeout(function () {
      $('.header__info_line').css({ right: '-300px' })
      $('.nav__toggle_line').removeClass('active')
      $('.nav__toggle_btn').find('i').removeClass('icon-close')
      $('.nav__toggle_btn').find('i').addClass('icon-menu')
    }, 301)
  })

  //Advantages

  if ($(window).width() < 1024) {
    $('.first').removeClass('hide')
    $('.first').addClass('show')
    $('.first-item').find('.list__marker_outline').css({ opacity: '1' })

    $('.advantages__list_item').click(function () {
      //show
      if ($(this).find('.advantages__list_text, .first').hasClass('hide')) {
        $('.advantages__list_text, .first').slideUp(200).removeClass('show')
        $('.advantages__list_text, .first').addClass('hide')
        $('.list__marker_outline').css({ opacity: '0' })

        $(this)
          .find('.advantages__list_text, .first')
          .slideDown(200)
          .removeClass('hide')
        $(this)
          .find('.advantages__list_text, .first')
          .slideDown(200)
          .addClass('show')

        $(this).find('.list__marker_outline').css({ opacity: '1' })
      } else if (
        $(this).find('.advantages__list_text, .first').hasClass('show')
      ) {
        $(this)
          .find('.advantages__list_text, .first')
          .slideUp(200)
          .removeClass('show')
        $(this).find('.advantages__list_text, .first').addClass('hide')

        $(this).find('.list__marker_outline').css({ opacity: '0' })
      }
    })
  } else if ($(window).width() >= 1024) {
    $('.first').addClass('advantages__list_text')

    $('.advantages__list_item').hover(function () {
      //show
      if ($(this).find('.advantages__list_text, .first').hasClass('hide')) {
        $('.advantages__list_text, .first').slideUp(200).removeClass('show')
        $('.advantages__list_text, .first').addClass('hide')
        $(this)
          .find('.advantages__list_text, .first')
          .slideDown(200)
          .removeClass('hide')
        $(this)
          .find('.advantages__list_text, .first')
          .slideDown(200)
          .addClass('show')
      } else if (
        $(this).find('.advantages__list_text, .first').hasClass('show')
      ) {
        $(this)
          .find('.advantages__list_text, .first')
          .slideUp(200)
          .removeClass('show')
        $(this).find('.advantages__list_text, .first').addClass('hide')
      }
    })
  }

  // Video-popup
  //show intro
  $('.intro__play').click(function () {
    $('.intro__play_outline').toggleClass('active')
    $('.header').fadeToggle(200)
    $('.video__popup').removeClass('hide-video')
    $('.video__popup').addClass('show-video')

    var video_data = $('.video__popup iframe').data('src')
    $('.video__popup iframe').attr('src', video_data)
  })
  //hide intro
  $('.close-popup-video').click(function () {
    $('.video__popup').removeClass('show-video')
    $('.video__popup').addClass('hide-video')
    $('.header').fadeToggle(200)
    $('.intro__play_outline').toggleClass('active')

    $('.video__popup iframe').attr('src', '')
  })

  // Video popup-portfolio
  //show biz
  $('.biz-video').click(function () {
    $('.popup-video-1').removeClass('hide-video-portfolio')
    $('.popup-video-1').addClass('show-video-portfolio')

    var video_data = $('.popup-video-1 iframe').data('src')
    $('.popup-video-1 iframe').attr('src', video_data)
  })
  //hide biz
  $('.close-video').click(function () {
    $('.popup-video-1').removeClass('show-video-portfolio')
    $('.popup-video-1').addClass('hide-video-portfolio')

    $('.popup-video-1 iframe').attr('src', '')
  })

  $('.biz-video').mouseover(function () {
    $('.biz-video').css({ 'background-size': 'auto 120%' })
  })
  $('.biz-video').mouseout(function () {
    $('.biz-video').css({ 'background-size': 'auto 100%' })
  })

  //show pr
  $('.pr-video').click(function () {
    $('.popup-video-2').removeClass('hide-video-portfolio')
    $('.popup-video-2').addClass('show-video-portfolio')

    var video_data = $('.popup-video-2 iframe').data('src')
    $('.popup-video-2 iframe').attr('src', video_data)
  })
  //hide pr
  $('.close-video').click(function () {
    $('.popup-video-2').removeClass('show-video-portfolio')
    $('.popup-video-2').addClass('hide-video-portfolio')

    $('.popup-video-2 iframe').attr('src', '')
  })

  $('.pr-video').mouseover(function () {
    $('.pr-video').css({ 'background-size': 'auto 120%' })
  })
  $('.pr-video').mouseout(function () {
    $('.pr-video').css({ 'background-size': 'auto 100%' })
  })

  //Gallery-popup biz
  // show
  $('.biz').click(function () {
    $('.popup-prj-1').removeClass('hide-gallery')
    $('.popup-prj-1').addClass('show-gallery')

    // Main slider
    $('.popup-prj-1 .main-slider-biz').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      fade: true,
      prevArrow: $('.main-prev-biz'),
      nextArrow: $('.main-next-biz'),
      asNavFor: '.main-slider-title-biz',
    })
    $('.main-slider-title-biz').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.main-slider-biz',
      focusOnSelect: true,
      infinite: true,
      arrows: false,
    })
    // Slider for photo
    $('.main-slider-biz .project__slider_img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="img-prev-biz"></button>',
      nextArrow: '<button class="img-next-biz"></button>',
      dots: true,
      infinite: true,
      autoplaySpeed: 3500,
      pauseOnHover: false,
      // pauseOnFocus: false,
      fade: true,
      asNavFor: '.main-slider-biz .project__slider_nav',
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            arrows: false,
            dots: true,
          },
        },
      ],
    })
    $('.main-slider-biz .project__slider_nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.main-slider-biz .project__slider_img',
      focusOnSelect: true,
      infinite: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    })

    // $('.project__slider_nav').on('afterChange', function(event, slick, currentSlide){
    //     if($('.video-item').hasClass('slick-current')){
    //         var video_data = $('iframe').data('src');
    //         $('iframe').attr('src', video_data);

    //     } else{
    //         $('.slider__img_item iframe').attr('src', '');
    //     }
    // });

    $('.main-slider-biz').get(0).slick.setPosition()
    // $(".main-slider-title-biz").get(0).slick.setPosition();
    $('.main-slider-biz .project__slider_nav').get(0).slick.setPosition()
    $('.main-slider-biz .project__slider_img').get(0).slick.setPosition()
    $('.main-slider-biz').resize()
    // $('.main-slider-title-biz').resize();
  })
  // hide
  $('.close').click(function () {
    $('.popup-prj-1').removeClass('show-gallery')
    $('.popup-prj-1').addClass('hide-gallery')

    $('.main-slider-biz').slick('unslick')
    $('.main-slider-title-biz').slick('unslick')
    $('.main-slider-biz .project__slider_nav').slick('unslick')
    $('.main-slider-biz .project__slider_img').slick('unslick')
  })

  $('.biz').mouseover(function () {
    $('.biz').css({ 'background-size': 'auto 120%' })
  })
  $('.biz').mouseout(function () {
    $('.biz').css({ 'background-size': 'auto 100%' })
  })

  //Gallery-popup pr
  // show
  $('.pr').click(function () {
    $('.popup-prj-2').removeClass('hide-gallery')
    $('.popup-prj-2').addClass('show-gallery')

    // Main slider
    $('.popup-prj-2 .main-slider-pr').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      fade: true,
      prevArrow: $('.main-prev-pr'),
      nextArrow: $('.main-next-pr'),
      asNavFor: '.main-slider-title-pr',
    })
    $('.main-slider-title-pr').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.main-slider-pr',
      focusOnSelect: true,
      infinite: true,
      arrows: false,
    })

    // Slider for photo
    $('.main-slider-pr .project__slider_img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="img-prev-pr"></button>',
      nextArrow: '<button class="img-next-pr"></button>',
      dots: true,
      infinite: true,
      fade: true,
      autoplaySpeed: 3500,
      pauseOnHover: false,
      // pauseOnFocus: false,
      asNavFor: '.main-slider-pr .project__slider_nav',
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            arrows: false,
            dots: true,
          },
        },
      ],
    })
    $('.main-slider-pr .project__slider_nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.main-slider-pr .project__slider_img',
      focusOnSelect: true,
      infinite: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    })

    // $('.project__slider_nav').on('afterChange', function(event, slick, currentSlide){
    //     if($('.video-item').hasClass('slick-current')){
    //         var video_data = $('iframe').data('src');
    //         $('iframe').attr('src', video_data);

    //     } else{
    //         $('.slider__img_item iframe').attr('src', '');
    //     }
    // });

    $('.main-slider-pr').get(0).slick.setPosition()
    // $(".main-slider-title-pr").get(0).slick.setPosition();
    $('.main-slider-pr .project__slider_nav').get(0).slick.setPosition()
    $('.main-slider-pr .project__slider_img').get(0).slick.setPosition()
    $('.main-slider-pr').resize()
    // $('.main-slider-title-pr').resize();
  })
  // hide
  $('.close-pr').click(function () {
    $('.popup-prj-2').removeClass('show-gallery')
    $('.popup-prj-2').addClass('hide-gallery')

    $('.main-slider-pr').slick('unslick')
    $('.main-slider-title-pr').slick('unslick')
    $('.main-slider-pr .project__slider_nav').slick('unslick')
    $('.main-slider-pr .project__slider_img').slick('unslick')
  })

  $('.pr').mouseover(function () {
    $('.pr').css({ 'background-size': 'auto 120%' })
  })
  $('.pr').mouseout(function () {
    $('.pr').css({ 'background-size': 'auto 100%' })
  })

  //Estimate-popup
  // show footer
  $('.footer__calc').click(function () {
    $('.popup-estimate .estimate').removeClass('hide-estimate')
    $('.popup-estimate .estimate').addClass('show-estimate')
  })
  // hide footer
  $('.close-popup-estimate').click(function () {
    $('.popup-estimate .estimate').removeClass('show-estimate')
    $('.popup-estimate .estimate').addClass('hide-estimate')
  })

  // show portfolio
  $('.portfolio__btn').click(function () {
    $('.popup-estimate .estimate').removeClass('hide-estimate')
    $('.popup-estimate .estimate').addClass('show-estimate')
  })
  // hide portfolio
  $('.close-popup-estimate').click(function () {
    $('.popup-estimate .estimate').removeClass('show-estimate')
    $('.popup-estimate .estimate').addClass('hide-estimate')
  })

  //Zvonok-popup
  // show footer
  $('.header__btn').click(function () {
    $('.popup-zvonok .zvonok').removeClass('hide-zvonok')
    $('.popup-zvonok .zvonok').addClass('show-zvonok')
  })
  // hide footer
  $('.close-popup-zvonok').click(function () {
    $('.popup-zvonok .zvonok').removeClass('show-zvonok')
    $('.popup-zvonok .zvonok').addClass('hide-zvonok')
  })

  //Zayavka-popup
  // show app
  $('.intro__btn').click(function () {
    $('.popup-app .app').removeClass('hide-app')
    $('.popup-app .app').addClass('show-app')
  })
  // hide app
  $('.close-popup-app').click(function () {
    $('.popup-app .app').removeClass('show-app')
    $('.popup-app .app').addClass('hide-app')
  })

  //Thanks
  //show thanks
  $('.active-thanks').click(function () {
    $('.thanks').removeClass('hide-thanks')
    $('.thanks').addClass('show-thanks')
  })
  //hide thanks
  $('.close-popup-thanks').click(function () {
    $('.thanks').removeClass('show-thanks')
    $('.thanks').addClass('hide-thanks')

    $('.popup-app .app').removeClass('show-app')
    $('.popup-app .app').addClass('hide-app')

    $('.popup-zvonok .zvonok').removeClass('show-zvonok')
    $('.popup-zvonok .zvonok').addClass('hide-zvonok')

    $('.popup-estimate .estimate').removeClass('show-estimate')
    $('.popup-estimate .estimate').addClass('hide-estimate')
  })

  // Height for gallery
  function windowSize() {
    if ($(window).width() >= '320') {
      var imgWidth = $(
        '.portfolio__content_video, .portfolio__content_photo'
      ).width()
      $('.portfolio__content_video, .portfolio__content_photo').css({
        height: imgWidth,
      })
    } else if ($(window).width() <= '767') {
    }
  }

  $(window).on('load resize', windowSize)

  // Mask for input-phone
  jQuery(function ($) {
    $('.input__phone').mask('+7 (999) 999-99-99')
  })

  //  Fancybox
  $('.popup-prj-1 .slider__img_item a').fancybox({
    parentEl: '.fancybox',
    panimationDuration: 600,
    animationEffect: 'slide-in-out',
    clickContent: false,
    beforeShow: function () {
      $('body').css({ 'overflow-y': 'hidden' })
    },
    afterClose: function () {
      $('body').css({ 'overflow-y': 'scroll' })

      $('html, body').scrollTop(1000)
      if ($(window).width() >= 375) {
        $('html, body').scrollTop(1900)
      }
      if ($(window).width() >= 414) {
        $('html, body').scrollTop(2050)
      }
      if ($(window).width() >= 768) {
        $('html, body').scrollTop(3900)
      }
      if ($(window).width() >= 1024) {
        $('body').css({ 'overflow-y': 'hidden' })
      }
    },
  })
  $('.popup-prj-2 .slider__img_item a').fancybox({
    parentEl: '.fancybox',
    panimationDuration: 600,
    animationEffect: 'slide-in-out',
    clickContent: false,
    beforeShow: function () {
      $('body').css({ 'overflow-y': 'hidden' })
    },
    afterClose: function () {
      $('body').css({ 'overflow-y': 'scroll' })

      $('html, body').scrollTop(2000)
      if ($(window).width() >= 375) {
        $('html, body').scrollTop(2800)
      }
      if ($(window).width() >= 414) {
        $('html, body').scrollTop(3000)
      }
      if ($(window).width() >= 768) {
        $('html, body').scrollTop(4100)
      }
      if ($(window).width() >= 1024) {
        $('body').css({ 'overflow-y': 'hidden' })
      }
    },
  })

  // Advantages btn
  $('.advantages__btn').on('click', function () {
    $.fn.fullpage.moveTo(5)
  })
})

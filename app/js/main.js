const {
   default: Swiper
} = require("swiper");

$(function () {

   $('.menu__button').on('click', function () {
      $('.menu__button').toggleClass('menu__button--active');
      $('.menu__mobile').toggleClass('menu__mobile--active');
      $('.body').toggleClass('lock');
   });

   $('.menu__mobile-close').on('click', function () {
      $('.menu__button').toggleClass('menu__button--active');
      $('.menu__mobile').toggleClass('menu__mobile--active');
      $('.body').toggleClass('lock');
   });

   $('.catalog-top__btn').on('click', function () {
      $('.catalog__inner-wrp').toggleClass('catalog__inner-wrp--active');
      $('.body').toggleClass('lock');
   });

   $('.catalog__inner-btn').on('click', function () {
      $('.catalog__inner-wrp').toggleClass('catalog__inner-wrp--active');
      $('.body').toggleClass('lock');
   });

   $('.product__rating, .comments__rating').rateYo({
      starWidth: '16px',
      normalFill: 'rgba(193, 193, 193, 0.7)',
      ratedFill: '#ffb800',
      spacing: '6px',
      halfStar: true,
      starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z" fill="""/></svg>'
   });

   var swiper = new Swiper('.reviews__list', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      simulateTouch: true,
      autoplay: {
         delay: 1500,
         disableOnInteraction: false,
      },

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },

      navigation: {
         clickable: true,
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      }
   });

   var swiper3 = new Swiper('.promo__wrp', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      simulateTouch: true,
      speed: 300,
      autoplay: {
         delay: 1500,
         disableOnInteraction: false,
      },

      breakpoints: {
         768: {
            slidesPerView: 2,
         },

         992: {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: false,
         },
      },

      pagination: {
         el: '.promo__pagination',
         clickable: true,
      },
   });

   $('.filter-price__input').ionRangeSlider({
      type: 'double',
      onStart: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },
   });

   var productSlider = new Swiper('.product__slider', {
      slidesPerView: 1,
      spaceBetween: 70,
      loop: true,
      simulateTouch: true,
      speed: 1200,
      slideClass: 'product__slider-slide',
      wrapperClass: 'product__slider-wrp',
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      navigation: {
         clickable: true,
         prevEl: '.product__slider-btn--prev',
         nextEl: '.product__slider-btn--next',
      }
   });

   var mixer = mixitup('.category__list');
});

//product input logic
const productQuantity = document.getElementById('product__quantity');

function stepper(btn) {
   let id = btn.getAttribute('id');
   let min = productQuantity.getAttribute('min');
   let max = productQuantity.getAttribute('max');
   let step = productQuantity.getAttribute('step');
   let val = productQuantity.getAttribute('value');
   let calcStep = (id == 'increment') ? (step * 1) : (step * -1);
   let newValue = parseInt(val) + calcStep;

   if (newValue >= min && newValue <= max) {
      productQuantity.setAttribute('value', newValue);
   };
};

//product page tabs
//look through all tabs to get single tab, and for each of the tabs we will add event listener (inside the arrow fucnction) and every time we click on it, it will run the function
const tabButtons = document.querySelectorAll('.product-info__btn');
const tabItems = document.querySelectorAll('.product-info__content');

tabButtons.forEach(tabButton => {
   tabButton.addEventListener('click', (event) => {
      const dataValue = tabButton.dataset.tabsHandler;

      tabItems.forEach(tabItem => {
         if (tabItem.dataset.tabsField === dataValue) {
            tabItem.classList.remove('hidden');
         } else {
            tabItem.classList.add('hidden');
         }
      });

      tabButtons.forEach((btn) => {
         if (btn === event.target) {
            btn.classList.add('product-info__btn--active');
         } else {
            btn.classList.remove('product-info__btn--active');
         }
      });
   });
});

var productOffer = new Swiper('.product-offer__slider', {
   slidesPerView: 2,
   spaceBetween: 5,
   loop: true,
   simulateTouch: true,
   speed: 1800,
   slideClass: 'product-offer__slide',
   wrapperClass: 'product-offer__wrapper',
   loopedSlides: 0,
   breakpoints: {
      576: {
         slidesPerView: 3,
      },

      768: {
         spaceBetween: 15,
         slidesPerView: 4,
      },

      992: {
         spaceBetween: 30,
      },

      1200: {
         slidesPerView: 5,
      },
   },

   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   navigation: {
      clickable: true,
      prevEl: '.product-offer__btn--prev',
      nextEl: '.product-offer__btn--next',
   },
   pagination: {
      el: '.product-offer__pagination',
      clickable: true,
   },
});

//---------------------
const restaurant = document.querySelector('.restaurant__wrapper');

var swiper2 = new Swiper('.restaurant__wrapper', {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   simulateTouch: true,
   wrapperClass: 'restaurant__list',
   slideClass: 'restaurant__item',
});

//swiper on mobile screens

// function restaurantMobile() {
//    if (window.innerWidth <= 768 && restaurant.dataset.adaptive === 'false') {
//       restaurantSwiper = new Swiper(restaurant, {
//          slidesPerView: 1,
//          spaceBetween: 10,
//          loop: true,
//          simulateTouch: true,
//          speed: 600,
//          centeredSlides: true,
//          wrapperClass: 'restaurant__list',
//          slideClass: 'restaurant__item',
//          autoplay: {
//             delay: 1500,
//             disableOnInteraction: 'false',
//          },
//          pagination: {
//             el: '.restaurant__pagination',
//             clickable: true,
//          },
//       });

//       restaurant.dataset.adaptive = 'true';
//    };

//    if (window.innerWidth > 768) {
//       restaurant.dataset.adaptive = 'false';
//       if (slider.classList.contains('swiper-container-initialized')) {
//          restaurantSwiper.destroy(true, true);
//       };
//    };
// };
// window.addEventListener('resize', () => {
//    restaurantMobile();
// });
$(function () {

   $('.menu__button').on('click', function(){
      $('.menu__button').toggleClass('menu__button--active');
      $('.menu__mobile').toggleClass('menu__mobile--active');
      $('.body').toggleClass('lock');
   });

   $('.menu__mobile-close').on('click', function(){
      $('.menu__button').toggleClass('menu__button--active');
      $('.menu__mobile').toggleClass('menu__mobile--active');
      $('.body').toggleClass('lock');
   });

   $('.catalog-top__btn').on('click', function(){
      $('.catalog__inner-wrp').toggleClass('catalog__inner-wrp--active');
      $('.body').toggleClass('lock');      
   });

   $('.catalog__inner-btn').on('click', function(){
      $('.catalog__inner-wrp').toggleClass('catalog__inner-wrp--active');
      $('.body').toggleClass('lock');
   });

   var swiper = new Swiper('.reviews__list', {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
      simulateTouch: true,

		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},

		navigation: {
      	clickable: true,
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
   });

   var swiper2 = new Swiper('.restaurant__wrapper', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      simulateTouch: true,
      speed: 300,

      breakpoints: {       

         576: {
            slidesPerView: 1.9,
         },

         768: {
            slidesPerView: 2,
         },
         
         992: {
            slidesPerView: 3,
            spaceBetween: 30,
         },
      },

      pagination: {
			el: ".restaurant__pagination",
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

   var mixer = mixitup('.category__list');
});



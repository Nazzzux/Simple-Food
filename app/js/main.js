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

   var swiper = new Swiper('.reviews__list', {
		slidesPerView: 1,
		spaceBetween: 20,
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

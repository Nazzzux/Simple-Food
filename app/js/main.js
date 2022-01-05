$(function () {

   // swiper

   var swiper = new Swiper('.reviews__list', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,

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
   // swiper


   // slick-slider
   
   // $('.reviews__list').slick({
   //    dots: true,
   //    prevArrow: '<button type="button" class="slick-btn slick-prev"><span class="sr-only">Кнопка предыдущий слайд</span><svg class="slick-svg" width="34" height="34"><use xlink:href="images/sprite/images.svg#prev_arrow"></svg></button>',
   //    nextArrow: '<button type="button" class="slick-btn slick-next"><span class="sr-only">Кнопка следующий слайд</span><svg class="slick-svg" width="34" height="34"><use xlink:href="images/sprite/images.svg#next_arrow"></svg></button>',
   //    slidesToShow: 1,
   // });

   // slick-slider



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

$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 3,
        slidesToScroll:3,
        infinite:true,
        arrows:true,
        prevArrow:`<button type='button' class='slick-prev slick-arrow'></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><img src="./assets/img/arrow-slider.svg" alt="" /></button>`,
    });
  });
  $(document).ready(function(){
    $('.products-list-said').slick({
        slidesToShow: 3,
        slidesToScroll:3,
        infinite:false,
        arrows:true,
        prevArrow:`<button type='button' class='slick-prev slick-arrow'></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><img src="./assets/img/arrow-slider.svg" alt="" /></button>`,
    });
  });
 
$(document).ready(function () {
  // $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.your-class',
  // });

  $('.slider-content').slick({
    slidesToShow: 1,
    arrows: false,
    // asNavFor: '.slider-for',
    dots: true,
  });

  $('.testimoinal-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });
});

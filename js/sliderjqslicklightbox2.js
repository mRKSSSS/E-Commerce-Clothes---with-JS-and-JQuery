$(document).ready(function(){

    //Slick
    $('#carousel').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 2,
        prevArrow: '<a class="slider-before-button">&#10094;</a>',
        nextArrow: '<a class="slider-after-button">&#10095;</a>',
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 6
              }
            },
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 468,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    //Lightbox2
    lightbox.option({
      fadeDuration: 400,
      disableScrolling: true
    });

});
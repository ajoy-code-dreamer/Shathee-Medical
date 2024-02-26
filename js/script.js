// ====== jQuery operations ======
$(function(){
    // ==== slick slider operation ====
    $('.suggest_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.suggest_prevArrow',
        nextArrow: '.suggest_nextArrow',
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.follow_dietSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.flowDiet_prevArrow',
        nextArrow: '.flowDiet_nextArrow',
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.related_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.related_prevArrow',
        nextArrow: '.related_nextArrow',
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            }
          ]
    });

    $('.toDo_slider1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.toDo_prevIcon1',
        nextArrow: '.toDo_nextIcon1',
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            }
          ]
    });
    $('.toDo_slider2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.toDo_prevIcon2',
        nextArrow: '.toDo_nextIcon2',
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            }
          ]
    });

    

    // ==== slick slider operation ====






})
// ====== jQuery operations ======




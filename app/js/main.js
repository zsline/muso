$(function () {
    $('.feed__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        swipe: false,
        nextArrow: '<img class="next-arrow arrows" src="../images/arrow-right.svg" alt="">',
        prevArrow: '<img class="prev-arrow arrows" src="../images/arrow-right.svg" alt="">',
        responsive: [
            {
                breakpoint: 1824,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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

    $('.current__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        swipe: false,
        nextArrow: '<img class="next-arrow arrows" src="../images/arrow-right.svg" alt="">',
        prevArrow: '<img class="prev-arrow arrows" src="../images/arrow-right.svg" alt="">',
        responsive: [
            {
                breakpoint: 1824,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
    $('.popular__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        swipe: false,
        nextArrow: '<img class="next-arrow arrows" src="../images/arrow-right.svg" alt="">',
        prevArrow: '<img class="prev-arrow arrows" src="../images/arrow-right.svg" alt="">',
        responsive: [
            {
                breakpoint: 1650,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

})
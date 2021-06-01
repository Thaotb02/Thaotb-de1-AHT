console.clear();

$(".slider").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 1008,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 300,
            settings: "unslick"
        }

    ]
});
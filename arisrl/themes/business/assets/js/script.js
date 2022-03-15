// servicesCarousel fix
function servicesCarousel() {
    new Swiper('.services-carousel', {
        spaceBetween: 0,
        speed: 600,
        autoplay: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 0
            }
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true
        }
    });
}
servicesCarousel();
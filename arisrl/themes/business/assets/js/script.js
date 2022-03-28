// servicesCarousel fix
function servicesCarousel() {
    new Swiper('.services-carousel', {
        spaceBetween: 0,
        speed: 600,
        loop: true,
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

// animated section reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 0;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

var maps = document.querySelectorAll(".map-responsive");
for (let i = 1; i <= maps.length; i++) {
    document.getElementById("map" + i + "-iframe").addEventListener('load', function(){
        setTimeout(() => {
            document.getElementById("map" + i + "-iframe").style.opacity=1;
            document.getElementById("loading"+ i).style.opacity=0;
        }, 1000);
    });
}
  
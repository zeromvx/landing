const slider = document.querySelector('.swiper-container');

var mySwiper = new Swiper (slider, {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    centeredSlides: true,
    loop: true, 
    breakpoints: {
        320: {
          slidesPerView: 1
        },
        425: {
            slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
    }
})
  
const swiper = new Swiper('.swiper', {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },

    observer: true, 
    observeParents: true,
    observeSlideChildren: true
});
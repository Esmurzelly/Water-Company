new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',

        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },        
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    slideToClickedSlide: true,
    
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    autoHeight: true,
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,

    autoplay: {
        delay: 3000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },

    effect: 'coverflow',

    
});
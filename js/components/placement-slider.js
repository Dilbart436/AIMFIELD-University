export function initPlacementSlider() {
    new Swiper(".placement-support__slider", {
        loop: true,

        spaceBetween: 16,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
            },

            1024: {
                slidesPerView: 2.5,
            },

            1280: {
                slidesPerView: 3.2,
            },
        },
    });
}
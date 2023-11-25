window.addEventListener("load", () => {

    const swiper = new Swiper("#app > .swiper", {
        direction: "vertical",
        speed: 750,
        mousewheel: true,
        slidesPerView: "auto",
        slidePerGroup: 1,
        pagination: {
            el: "#app > .swiper-pagination",
            type: "progressbar",
            progressbarOpposite: true
        },
        navigation: {
            nextEl: "#intro .angle"
        }
    });
});

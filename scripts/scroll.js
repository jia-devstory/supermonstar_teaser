window.addEventListener("load", () => {

    let observer = new IntersectionObserver((e) => {
    });

    const intro = document.querySelector("#intro");
    const introImgBurger = intro.querySelector(".image-burger");

    observer.observe(introImgBurger);

    if (introImgBurger.isIntersecting) {
        introImgBurger.style.opacity = 0;
    }
})

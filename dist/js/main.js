const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector("#primary-navigation");
const navToggleIcon = document.querySelector(".nav__toggle-icon");

function closeMobileMenu() {
    navLinks.classList.remove("nav__links--active");

    navToggle.setAttribute("aria-expanded", false);

    navToggleIcon.classList.add("fa-bars");
    navToggleIcon.classList.remove("fa-xmark");
}

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav__links--active");

    const isMenuOpen = navLinks.classList.contains("nav__links--active");

    navToggle.setAttribute("aria-expanded", isMenuOpen);

    navToggleIcon.classList.toggle("fa-bars");
    navToggleIcon.classList.toggle("fa-xmark");
});

const navItems = document.querySelectorAll(".nav__link");

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        closeMobileMenu();
    });
});

document.addEventListener("click", (event) => {
    const isClickInsideNav = event.target.closest(".nav");

    if (!isClickInsideNav) {
        closeMobileMenu();
    }
});



// ====== Hero Slider ======
const heroSlider = new Swiper(".hero__slider", {
    loop: true,

    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: ".hero__navigation--next",
        prevEl: ".hero__navigation--prev",
    },

    pagination: {
        el: ".hero__pagination",
        clickable: true,
    },
});


// ====== Placement Support Slider ======
const placementSlider = new Swiper(".placement-support__slider", {
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
    },
});
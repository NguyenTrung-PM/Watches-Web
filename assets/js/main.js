// TODO: SHOW MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    toggleIcon = document.getElementById('toggle-icon'),
    header = document.getElementById('header');

let show = false;

navToggle.addEventListener('click', () => {
    show = !show;
    if (show) {
        toggleIcon.classList.add('bx-x-circle');
        navMenu.classList.add('show-menu');
    } else {
        toggleIcon.classList.remove('bx-x-circle');
        navMenu.classList.remove('show-menu');
    }
});

// TODO: REMOVE MENU MOBILE
const links = document.querySelectorAll('.nav__link');

links.forEach((link) =>
    link.addEventListener('click', () => {
        show = !show;
        toggleIcon.classList.remove('bx-x-circle');
        navMenu.classList.remove('show-menu');
    })
);

// TODO: SCROLL EVENT
window.addEventListener('scroll', () => {
    // TODO: CHANGE BACKGROUND HEADER
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});

// TODO: SWIPER JS
var testimonialSwiper = new Swiper('.testimonial-swiper', {
    spaceBetween: 30,
    loop: 'true',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var newSwiper = new Swiper('.new-swiper', {
    spaceBetween: 24,
    loop: 'true',
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});

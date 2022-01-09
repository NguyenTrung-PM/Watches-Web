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

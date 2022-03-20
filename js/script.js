const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const mobileNavigation = document.querySelector('.nav-burger');

burgerMenu.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle('btn-open');
    navBurger.classList.toggle('nav-burger-open');
});
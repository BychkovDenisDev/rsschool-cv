
const burgerBtn = document.querySelector('.header-burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuLinks = document.querySelectorAll('burger-nav-link');
const coverScreen = document.querySelector('.cover-screen')
let lastScrool = 0;
const defaultOffSet = 200;
const header = document.querySelector(".header");
let isByrgerMenuOpen = false;
let isAnimationStop = true;
let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

/*Scrool Menu (start)*/

const scroolPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {

    if (scroolPosition > lastScrool && !containHide() && containHide() > defaultOffSet) {
        header.classList.add('hide');
    } else if (scroolPosition < lastScrool && containHide()) {
        header.classList.remove('hide');
    }

    lastScrool = scroolPosition();
});

/*Scrool Menu (end)*/

/*Burger Menu (start)*/
const openBurger = () => {
    coverScreen.style.display = 'block';
    burgerBtn.classList.remove('header-burger-closed');
    burgerBtn.classList.add('header-burger-open');
    burgerMenu.classList.add('burger-menu-active');
    burgerMenu.classList.add('burger-menu-animation-in');
    burgerMenu.classList.remove('burger-menu-animation-out');
    document.body.style.overflowX = 'hidden';
    isByrgerMenuOpen = true;
}

const closeBurger = () => {
    coverScreen.style.display = 'none';
    burgerBtn.classList.add('header-burger-closed');
    burgerBtn.classList.remove('header-burger-open');
    burgerMenu.classList.remove('burger-menu-animation-in');
    burgerMenu.classList.add('burger-menu-animation-out');
    document.body.style.overflowX = 'visible';
    setTimeout(removeClassActive, 1500)
    isByrgerMenuOpen = false;
};

const removeClassActive = () => {
    burgerMenu.classList.remove('burger-menu-active');
};

burgerBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (isByrgerMenuOpen) {
        closeBurger();
    } else {
        openBurger();
    }
});

coverScreen.addEventListener('click', closeBurger);
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        e.preventDefault;
        if (isByrgerMenuOpen) {
            closeBurger();
        }
    }
});

burgerMenuLinks.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault;
        if (isByrgerMenuOpen) {
            closeBurger();
        }
    });
})

window.addEventListener('resize', () => {
    if (isByrgerMenuOpen) {
        closeBurger();
    }
});

/*Burger Menu (end)*/
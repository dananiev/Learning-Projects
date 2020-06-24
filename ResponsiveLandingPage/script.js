const mainNav = document.querySelector('.main-nav');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});
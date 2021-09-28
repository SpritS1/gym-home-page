const bars = document.querySelector('.nav__bars');
const mobileMenu = document.querySelector('.nav__mobile-dropdown')
const mobileMenuClose = document.querySelector('.nav__mobile-dropdown-close');

bars.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.add('active');
})

mobileMenuClose.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.remove('active');
})
export const mobileNavbar = () => {
    const bars = document.querySelector('.nav__bars');
    const mobileMenu = document.querySelector('.nav__mobile-dropdown')
    const mobileMenuClose = document.querySelector('.nav__mobile-dropdown-close');
    const navbar = document.querySelector('.nav');

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    }

    window.addEventListener('scroll', (e) => {
        e.preventDefault();

        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else if (window.scrollY === 0) {
            navbar.classList.remove('scrolled');
        }
    })    

    bars.addEventListener('click', (e) => {
        e.preventDefault();
        mobileMenu.classList.add('active');
    })

    mobileMenuClose.addEventListener('click', (e) => {
        e.preventDefault();
        mobileMenu.classList.remove('active');
    })
}


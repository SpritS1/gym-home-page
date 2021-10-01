export const mobileNavbar = () => {
    const bars = document.querySelector('.nav__bars');
    const mobileMenu = document.querySelector('.nav__mobile-dropdown')
    const mobileMenuClose = document.querySelector('.nav__mobile-dropdown-close');
    const navbar = document.querySelector('.nav');
    const mobileBackground = document.querySelector('.nav__mobile-background')

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
        mobileBackground.classList.add('active');
    })

    mobileBackground.addEventListener('click', (e) => {
        e.preventDefault();
        
        mobileMenu.classList.remove('active');
        mobileBackground.classList.remove('active');
    })
    
    mobileMenuClose.addEventListener('click', (e) => {
        e.preventDefault();
        mobileMenu.classList.remove('active');
        mobileBackground.classList.remove('active');
    })
}


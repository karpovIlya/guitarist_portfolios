window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo-section__nav-menu'),
    menuItem = document.querySelectorAll('.promo-section__nav-elem'),
    hamburger = document.querySelector('.promo-section__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('promo-section__hamburger_active');
        menu.classList.toggle('promo-section__nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('promo-section__hamburger_active');
            menu.classList.toggle('promo-section__nav-menu_active');
        })
    })
})
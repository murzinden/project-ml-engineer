

document.addEventListener("DOMContentLoaded", function() {
    const burgerButtonOpen = document.querySelector('.burger__menu_btn');
    const burgerButtonClose = document.querySelector('.burger__menu_close');
    const logoImage = document.querySelector('.header__logo');

    if(burgerButtonOpen && burgerButtonClose && logoImage) {
        const toggleBurgerMenu = () => {
            const menu = document.querySelector('.burger-menu');
            if(menu) {
                if (menu.classList.contains('slide-in')) {
                    menu.classList.remove('slide-in');
                    burgerButtonOpen.classList.remove('hidden');
                    burgerButtonClose.classList.add('hidden');

                    if(window.location.pathname.includes('projects')) {
                        logoImage.src = "images/logo-desktop-black.svg";
                    }

                } else {
                    menu.classList.add('slide-in');
                    burgerButtonOpen.classList.add('hidden');
                    burgerButtonClose.classList.remove('hidden');

                    if(window.location.pathname.includes('projects')) {
                        logoImage.src = "images/logo-desktop-white.svg";
                    }
                }
            }
        }

        burgerButtonOpen.addEventListener('click', toggleBurgerMenu);
        burgerButtonClose.addEventListener('click', toggleBurgerMenu);
    }
});



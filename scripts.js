document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('main-header');

    const menuToggle =
        document.querySelector('.menu-toggle');

    const navLinks =
        document.querySelector('.nav-links');

    // DESKTOP CALL POPUP
    const desktopCallBtn =
        document.getElementById('desktopCallBtn');

    const callPopup =
        document.getElementById('callPopup');

    // 1. Change header background on scroll
    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {
            header.classList.add('scrolled');

        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {

        navLinks.classList.toggle('active');

    });

    // 3. Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a')
        .forEach(link => {

        link.addEventListener('click', () => {

            navLinks.classList.remove('active');

        });

    });

    // 4. Desktop Call Popup
    desktopCallBtn.addEventListener('click', () => {

        callPopup.classList.toggle('active');

    });

});
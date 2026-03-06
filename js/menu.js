// Mobile Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            if (mobileMenu.classList.contains('open')) {
                // Close menu: set height to 0
                mobileMenu.style.height = mobileMenu.scrollHeight + 'px';
                // Force reflow
                mobileMenu.offsetHeight;
                mobileMenu.style.height = '0px';
                mobileMenu.classList.remove('open');
            } else {
                // Open menu: set height to scrollHeight
                mobileMenu.classList.add('open');
                mobileMenu.style.height = mobileMenu.scrollHeight + 'px';
            }
        });

        // After transition ends, remove inline height for open state
        mobileMenu.addEventListener('transitionend', function () {
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.style.height = 'auto';
            }
        });
    }

    // Fade-in / Slide-up animation on scroll
    var animatedElements = document.querySelectorAll('.fade-in, .slide-up');

    function checkVisibility() {
        animatedElements.forEach(function (el) {
            var rect = el.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            if (rect.top < windowHeight - 80) {
                el.classList.add('visible');
            }
        });
    }

    // Check on load
    checkVisibility();

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
});

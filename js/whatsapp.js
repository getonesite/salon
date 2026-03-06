// WhatsApp Floating Button Behavior
document.addEventListener('DOMContentLoaded', function () {
    var whatsappBtn = document.querySelector('.whatsapp-float');

    if (!whatsappBtn) return;

    // Add pulse animation class
    whatsappBtn.classList.add('whatsapp-pulse');

    // Stop pulse on hover, resume on mouse leave
    whatsappBtn.addEventListener('mouseenter', function () {
        whatsappBtn.classList.remove('whatsapp-pulse');
    });

    whatsappBtn.addEventListener('mouseleave', function () {
        whatsappBtn.classList.add('whatsapp-pulse');
    });

    // Show/hide based on scroll position
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 300) {
            whatsappBtn.style.opacity = '1';
            whatsappBtn.style.visibility = 'visible';
        } else {
            whatsappBtn.style.opacity = '1';
            whatsappBtn.style.visibility = 'visible';
        }

        lastScrollTop = scrollTop;
    });
});
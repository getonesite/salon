// Gallery Lightbox Functionality
document.addEventListener('DOMContentLoaded', function () {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxClose = document.getElementById('lightbox-close');
    var galleryItems = document.querySelectorAll('.gallery-item, .gallery-full-item');

    if (!lightbox || !lightboxImg) return;

    // Open lightbox on image click
    galleryItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var img = item.querySelector('img');
            if (img) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close lightbox on close button
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function () {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close lightbox on background click
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close lightbox on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
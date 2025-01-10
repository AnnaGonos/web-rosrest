document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.onscroll = function() {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    scrollToTopBtn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
});
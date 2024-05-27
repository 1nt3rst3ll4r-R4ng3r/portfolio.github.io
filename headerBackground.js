document.addEventListener('DOMContentLoaded', function() {
    function adjustHeaderBackground() {
        var header = document.querySelector('header h1');
        if (window.innerWidth < 768) {
            header.style.backgroundSize = 'contain';
        } else {
            header.style.backgroundSize = 'cover';
        }
    }

    // Adjust on load
    adjustHeaderBackground();

    // Adjust on window resize
    window.addEventListener('resize', adjustHeaderBackground);
});

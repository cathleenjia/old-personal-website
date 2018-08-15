document.querySelector('.js-scroll-to-intro').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.introduction').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    var goUpLink = document.querySelector('.go__up-linked');
    goUpLink.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

    burgerIcon.addEventListener('click', function() {
        burgerIcon.classList.toggle('active');
        menu.classList.toggle('active');
    });
});
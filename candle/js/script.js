document.addEventListener('DOMContentLoaded', function() {

    // Burger
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

    burgerIcon.addEventListener('click', function() {
        burgerIcon.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Slider
    // const cl_buttons = '.slider__button';
    // const buttons = document.querySelectorAll(cl_buttons);
    
    // buttons.forEach(function(button){
    //     button.addEventListener('click', () => {
    //         buttons.forEach(function(button){
    //             button.classList.remove('active');
    //         });
    //         button.classList.add('active');
    //     });
    // });
});
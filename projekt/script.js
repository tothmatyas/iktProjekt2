const buttons = document.querySelectorAll('.btn-animate');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Add the pulse effect class
        this.classList.add('pulse');
        
        // Remove the pulse effect after the animation ends (500ms)
        setTimeout(() => {
            this.classList.remove('pulse');
        }, 500);
    });
});
window.addEventListener('load', function () {
    let developerLogo = document.querySelector('.developer-logo');
    let directory = 'images/';
    let images = ['node.png', 'python.png', 'react.png', 'tensorflow.png'];

    let current = 0;
    
    this.setInterval(function() {
        current = (current + 1) % images.length;
        developerLogo.src = directory + images[current];
    }, 2990)
});
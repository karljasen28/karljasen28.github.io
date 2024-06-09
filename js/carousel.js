document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;
    const imagesPerView = 4; // Number of images to show at a time
    let index = 0;

    // Clone the first imagesPerView images and append them to the end of the carousel for seamless looping
    for (let i = 0; i < imagesPerView; i++) {
        const clone = images[i].cloneNode(true);
        carousel.appendChild(clone);
    }

    function showNextImages() {
        index++;
        carousel.style.transition = 'transform 2s linear';
        carousel.style.transform = `translateX(${-index * 100 / imagesPerView}%)`;

        // If we've shown all the original images, reset to the start
        if (index >= totalImages) {
            setTimeout(() => {
                index = 0;
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(0)`;
            }, 2000); // Match the transition duration
        }
    }

    setInterval(showNextImages, 2000); // Change image every second
});

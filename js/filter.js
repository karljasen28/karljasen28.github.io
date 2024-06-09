document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const images = document.querySelectorAll('.image-list img');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterImages(filter);
        });
    });

    function filterImages(filter) {
        images.forEach(img => {
            if (filter === 'all' || img.getAttribute('data-category') === filter) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }

    // Initialize with all images
    filterImages('all');
});

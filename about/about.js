// script.js
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container'); // The parent container
    const image = document.getElementById('image');
    const content = document.getElementById('content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate when entering the view
                image.style.transform = 'translate(-130%, -50%)'; // Slide image to the left
                content.classList.add('active'); // Activate the content to appear
            } else {
                // Reset positions when leaving the view
                image.style.transform = 'translate(-50%, -50%)'; // Reset image position
                content.classList.remove('active'); // Deactivate content
                // content.style.transform = 'translateX(100%)'; // Reset content position
            }
        });
    }, {
        threshold: 0.4 // Adjust threshold to a suitable value
    });

    observer.observe(container); // Observe the container
});


document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'in-view' class when the element comes into the viewport
                entry.target.classList.add('in-view');
            } else {
                // Remove 'in-view' class when the element goes out of the viewport
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.2, // Adjust this value based on how much of the item must be visible to trigger the animation
        rootMargin: "0px" // Can be used to grow or shrink each side of the root element's bounding box before computing intersections
    });

    // Observe all elements that require the animation
    document.querySelectorAll('.title, .meat').forEach(el => {
        observer.observe(el);
    });
});



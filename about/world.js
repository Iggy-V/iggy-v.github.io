document.addEventListener('DOMContentLoaded', function() {
    // Use an appropriate method to ensure SVG is loaded if it's being fetched
    fetch('world.svg')
        .then(response => response.text())
        .then(data => {
            document.getElementById('worldMap').innerHTML = data;
            // Now that SVG is loaded, mark countries as visited
            markAsVisited('#LT'); // ID for Lithuania
            markAsVisited('.United.States'); // Class for the United States
        })
        .catch(error => console.error('Error loading SVG:', error));
});

function markAsVisited(selector) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) {
        console.log('No elements found for selector:', selector);
    } else {
        console.log('Marking as visited:', selector);
    }
    elements.forEach(element => {
        element.classList.add('visited');
    });
}
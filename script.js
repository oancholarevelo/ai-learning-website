// // Select the button by its id
// const darkModeButton = document.getElementById('dark-mode-toggle');
// const body = document.body;

// darkModeButton.addEventListener('click', function() {
//     // Toggle dark-mode class on the body
//     body.classList.toggle('dark-mode');
    
//     // Toggle the icon between ☀️ and 🌙
//     if (body.classList.contains('dark-mode')) {
//         darkModeButton.textContent = '🌙'; // Switch to moon icon for dark mode
//     } else {
//         darkModeButton.textContent = '☀️'; // Switch back to sun icon for light mode
//     }
// });

// Select the button by its id
const darkModeButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Select all images that need to change when dark mode is toggled
const darkModeImages = document.querySelectorAll('.dark-mode-image');

darkModeButton.addEventListener('click', function() {
    // Toggle dark-mode class on the body
    body.classList.toggle('dark-mode');
    
    // Toggle the icon between ☀️ and 🌙
    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = '🌙'; // Switch to moon icon for dark mode

        // Update images for dark mode
        darkModeImages.forEach(image => {
            image.src = image.getAttribute('data-dark-src'); // Use the dark version of the image
        });
    } else {
        darkModeButton.textContent = '☀️'; // Switch back to sun icon for light mode

        // Revert images to light mode
        darkModeImages.forEach(image => {
            image.src = image.getAttribute('data-light-src'); // Use the light version of the image
        });
    }
});

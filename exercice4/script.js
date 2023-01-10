// Get the form and input elements
const form = document.querySelector('#MyForm');
const radiusInput = document.querySelector('#radius');
const volumeInput = document.querySelector('#volume');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the radius value
    const radius = radiusInput.value;

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the volume in the volume input element
    volumeInput.value = volume;
});
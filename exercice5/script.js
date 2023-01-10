// Get the box element
const box = document.querySelector('.box');
        
// Add a click event listener that changes the x position of the box
box.addEventListener('click', () => {
  box.style.left = `${Math.random() * 500}px`;
});

// Add a mouseover event listener that changes the y position of the box
box.addEventListener('mouseover', () => {
  box.style.top = `${Math.random() * 500}px`;
});

// Add a mouseout event listener that changes the color of the box
box.addEventListener('mouseout', () => {
  box.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
});

// Add a dblclick event listener that changes the font size of the box
box.addEventListener('dblclick', () => {
  box.style.fontSize = `${Math.random() * 50 + 20}px`;
});
// Declare a global variable to store the bold elements
let allBoldItems;
            
// Create a function to get all the bold elements within the paragraph
  function getBoldItems() {
      allBoldItems = document.querySelectorAll('p strong');
  }

// Create a function to highlight the bold text in blue
  function highlight() {
      allBoldItems.forEach((item) => {
          item.style.color = 'blue';
      });
  }

// Create a function to return the bold text to black
  function returnNormal() {
      allBoldItems.forEach((item) => {
          item.style.color = 'black';
      });
  }

// Get the bold elements when the page loads
  getBoldItems();

// Add event listeners to the paragraph element
  const paragraph = document.querySelector('p');
  paragraph.addEventListener('mouseover', highlight);
  paragraph.addEventListener('mouseout', returnNormal);
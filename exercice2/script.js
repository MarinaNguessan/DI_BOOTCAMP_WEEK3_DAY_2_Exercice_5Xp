// 1.Get the form element
const form = document.querySelector('form');
console.log(form);

// Get the input elements by their id attributes
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
console.log(fnameInput, lnameInput);

// Get the input elements by their name attributes
const fnameInput2 = document.querySelector('input[name=fname]');
const lnameInput2 = document.querySelector('input[name=lname]');
console.log(fnameInput2, lnameInput2);

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
   // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the input elements
    const fname = fnameInput.value;
    const lname = lnameInput.value;

    // Make sure the values are not empty
    if (fname === '' || lname === '') {
        return;
    }

  // Create list items with the input values
    const fnameItem = document.createElement('li');
    fnameItem.textContent = fname;
    const lnameItem = document.createElement('li');
    lnameItem.textContent = lname;

  // Add the list items to the usersAnswer list
    const list = document.querySelector('.usersAnswer');
    list.ppendChild(fnameItem);
    list.appendChild(lnameItem);
});
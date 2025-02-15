// Get elements from the DOM
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");
const list = document.getElementById('chore-list');
const chore = document.getElementById('textInput');

// Load chores from localStorage or set to an empty array if none exist
let chores = JSON.parse(localStorage.getItem("chores") || []);

// Function to display the list of chores
function display() {
    list.innerHTML = ''; // Clear the list first to avoid duplicates
    
    if (chores.length !== 0) {
        chores.forEach(chore => {
            const li = document.createElement('li');
            li.textContent = chore;
            list.appendChild(li); // Append the new list item to the list

            // Add event listener to remove the chore when clicked
            li.addEventListener("click", function(e) {
                const chore = e.target.textContent;
                const index = chores.indexOf(chore);
                if (index !== -1) {
                    chores.splice(index, 1); // Remove the chore from the array
                    localStorage.setItem("chores", JSON.stringify(chores)); // Update localStorage
                }
                display(); // Refresh the list after removal
            });
        });
    }
}

// Event listener for the "Add Chore" button
addButton.addEventListener("click", function() {
    const choreValue = chore.value.trim(); // Get input value and trim spaces
    
    // Check if the chore already exists or the input is empty
    if (chores.includes(choreValue)) {
        alert('Task already exists!');
    } else if (choreValue === '') {
        alert('Input is empty!');
    } else {
        chores.push(choreValue); // Add the chore to the chores array
        localStorage.setItem('chores', JSON.stringify(chores)); // Save updated chores to localStorage
        display(); // Refresh the display
    }

    chore.value = ''; // Clear the input field after adding
});

// Event listener for the "Clear Input" button
deleteButton.addEventListener('click', function() {
    chore.value = ''; // Clear the input field
});

// Calling the display function on page load to render saved chores
display();

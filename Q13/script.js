// Get references to all necessary DOM elements
const colorInput = document.getElementById('colorInput');
const changeBgButton = document.getElementById('changeBgButton');
const textInput = document.getElementById('textInput');
const updateTextButton = document.getElementById('updateTextButton');
const targetDiv = document.getElementById('targetDiv');

// --- Task 1: Change Background ---
changeBgButton.addEventListener('click', function() {
    // a. Retrieve the color name entered
    const colorValue = colorInput.value.trim();

    // Store the current background color before attempting to change it
    const originalColor = targetDiv.style.backgroundColor;
    
    // b. Change the background color of the <div> to the entered color (attempt)
    targetDiv.style.backgroundColor = colorValue;

    // c. Check for invalid color
    // A robust way to check color validity is to create a temporary element,
    // apply the color, and see if the browser parses it into a computed style.
    // For this simple task, we can rely on a simpler check: if the browser
    // couldn't parse the new value, it may revert to an empty string (or keep the old value).
    
    // Create a temporary element to test color parsing
    const tempDiv = document.createElement('div');
    tempDiv.style.backgroundColor = colorValue;

    // If the browser can't recognize the color, tempDiv.style.backgroundColor will be an empty string.
    if (colorValue === "" || tempDiv.style.backgroundColor === "") {
        // If it was invalid/empty, revert the change and alert
        targetDiv.style.backgroundColor = originalColor; // Revert the visual change
        alert("Invalid color name!");
    } else {
        // The color is valid and already applied to targetDiv.
        colorInput.value = ''; // Clear the input field
    }
});


// --- Task 2: Update Text ---
updateTextButton.addEventListener('click', function() {
    // a. Retrieve the text entered
    const textValue = textInput.value.trim();

    // b. Check if the input field is empty
    if (textValue === "") {
        // Display an alert
        alert("Please enter some text!");
    } else {
        // Update the text content of the <div>
        targetDiv.textContent = textValue;
        
        // Optional: clear the input field
        textInput.value = '';
    }
});
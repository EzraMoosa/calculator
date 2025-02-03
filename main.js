// Input display
const display = document.getElementById("display");

// Buttons container
const buttons = document.getElementById("buttons");

// Calculator buttons in an array
buttonArray = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
];

// Create buttons from array
buttonArray.forEach(operator => {
    // Create a new button element
    const btn = document.createElement("button");

    // Set text content of each button
    btn.textContent = operator;

    // Add click event listener for each button
    btn.addEventListener('click', () => {
        // Check if user clicked C / Clear
        if (operator === "C") {
            display.value = ""
        } 
        
        // Else if user presses '='
        else if (operator === "=") {

            // Evaluate user's expression
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error'
            };
            
        } else {
            // Append button presses to display value
            display.value += operator;
        }
    });

    // Append button to buttons div
    buttons.appendChild(btn)
});

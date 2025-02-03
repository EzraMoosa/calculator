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
buttonArray.forEach(button => {
    // Create a new button element
    const btn = document.createElement("button");

    // Set text content of each button
    btn.textContent = button;

    // Append button to buttons div
    buttons.appendChild(btn)
});

// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  document.getElementById("keyOutput").textContent = `Key Pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  document.getElementById("textOutput").textContent = document.getElementById("textInput").value;
}

// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);

// Attach event listener to reset background color when the body is double-clicked
document.getElementById('resetColorButton').addEventListener('dblclick', resetBackgroundColor);

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener('keydown', displayKeyPress);

// Attach event listener to display user input in real-time as they type
document.getElementById('textInput').addEventListener('input', displayUserInput);

// Additional Features

// Hover effect
const hoverElement = document.getElementById("hoverElement");
hoverElement.addEventListener("mouseover", () => {
  hoverElement.style.backgroundColor = "yellow";
});
hoverElement.addEventListener("mouseout", () => {
  hoverElement.style.backgroundColor = "initial";
});

// Form submit event
document.getElementById("formElement").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Form submitted successfully!");
});

// Function to generate a random color
function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`;
}

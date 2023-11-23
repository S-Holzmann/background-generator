// Get the needed HTML elements:
const cssCode = document.getElementById("gradientDisplay"); // H3 to display the CSS code
const body = document.body; // Body element
const color1 = document.querySelector(".color1"); // First color input element
const color2 = document.querySelector(".color2"); // Second color input element
const button = document.querySelector("button"); // Button element

// Function to generate a random hex color
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// Function to generate a random gradient
function randomize() {
    let randomColor1, randomColor2;

    do {
        randomColor1 = getRandomColor();
        randomColor2 = getRandomColor();
    } while (randomColor1 === randomColor2);

    // Set the input values to the random colors
    color1.value = randomColor1;
    color2.value = randomColor2;

    // Update the gradient
    setGradient();
}

// Function to set the gradient based on the input values
function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    // Display the generated CSS code
    cssCode.textContent = `${body.style.background};`;
}

// Event listeners for input changes and button click
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomize);

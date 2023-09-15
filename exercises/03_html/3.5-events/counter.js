// Get references to the HTML elements
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const counterParagraph = document.getElementById('counter');

// Initialize the counter value and update the paragraph text
let counterValue = 0;
updateCounterText();

// Event listener for the Increment button
incrementButton.addEventListener('click', () => {
  counterValue = (counterValue === 5) ? -5 : counterValue + 1;
  updateCounterText();
});

// Event listener for the Decrement button
decrementButton.addEventListener('click', () => {
  counterValue = (counterValue === -5) ? 5 : counterValue - 1;
  updateCounterText();
});

// Event listener for the Reset button
resetButton.addEventListener('click', () => {
  counterValue = 0;
  updateCounterText();
});

// Function to update the counter text in the paragraph
function updateCounterText() {
  counterParagraph.textContent = counterValue;
}

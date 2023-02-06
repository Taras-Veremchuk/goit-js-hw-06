let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

decrementButton.addEventListener('click', subtract);
incrementButton.addEventListener('click', add);

function subtract() {
  value.textContent = value.textContent - counterValue - 1;
}

function add() {
  value.textContent -= counterValue - 1;
}

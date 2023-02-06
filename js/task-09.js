function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const nameOfColor = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', event => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  nameOfColor.textContent = randomColor;
});

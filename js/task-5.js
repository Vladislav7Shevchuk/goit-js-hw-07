function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElem = document.body;
const buttonElem = document.querySelector('.change-color');
const colorSpanElem = document.querySelector('.color');

function onChangeColor() {
  const newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  colorSpanElem.textContent = newColor;
}

buttonElem.addEventListener('click', onChangeColor);

const spanText = document.querySelector('#name-output');
const inputElem = document.querySelector('#name-input');

function onInputChange(event) {
  const inputElem = event.target.value.trim();
  spanText.textContent = inputElem || 'Anonymous';
}

inputElem.addEventListener('input', onInputChange);

const inputField = document.querySelector(`#name-input`);
const outputElement = document.querySelector(`#name-output`);
inputField.addEventListener(`input`, (event) => {
outputElement.textContent = event.currentTarget.value;
if (event.currentTarget.value === "") { outputElement.textContent = "Anonymous" }
})
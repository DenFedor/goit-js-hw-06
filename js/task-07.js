const sliderSelector = document.querySelector(`#font-size-control`);
const textSelector = document.querySelector(`#text`);
sliderSelector.addEventListener(`input`, (event) => {
textSelector.style.fontSize = `${event.currentTarget.value}px`;
});

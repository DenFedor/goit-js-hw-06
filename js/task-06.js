const inputSelector = document.querySelector(`#validation-input`);
inputSelector.addEventListener(`blur`, (event) => {
  const symbolAmount = event.currentTarget.value;
  inputSelector.classList.remove(`valid`, `invalid`);
  if (symbolAmount.length !== 0) {
    symbolAmount.length == inputSelector.dataset.length
      ? inputSelector.classList.add(`valid`)
      : inputSelector.classList.add(`invalid`);
  }
});

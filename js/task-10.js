const outputDivSelector = document.querySelector(`#boxes`);
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const userInput = document.querySelector(`input`);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount) {
  let divArr = [];
  let divSize = 30;
  for (let i = 0; i < amount; i++) {
    let createDiv = document.createElement(`div`);
    createDiv.style.width = `${divSize}px`;
    createDiv.style.height = `${divSize}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    divArr.push(createDiv);
    divSize +=10;
  }
  outputDivSelector.append(...divArr);
};
function destroyBoxes() {
  // _______Basic method to remove children_________
  // while (outputDivSelector.firstChild) {
  //   outputDivSelector.removeChild(outputDivSelector.firstChild);
  // }
  outputDivSelector.replaceChildren();
};
createBtn.addEventListener(`click`, () => {
  createBoxes(userInput.value);
});
destroyBtn.addEventListener(`click`, () => {
  destroyBoxes();
})
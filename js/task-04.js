const decreaseBtn = document.querySelector(`[data-action='decrement']`);
const increaseBtn = document.querySelector(`[data-action='increment']`);
let counter = document.querySelector(`#value`);
let counterValue = 0;
decreaseBtn.addEventListener(`click`, () => {
    counterValue--;
    counter.textContent = counterValue;
})
increaseBtn.addEventListener(`click`, () => {
    counterValue++;
    counter.textContent = counterValue;
})
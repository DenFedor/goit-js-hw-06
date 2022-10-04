const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElem = document.querySelector("#ingredients");
let liArr = [];
ingredients.forEach(ingredient => {
let liItem = document.createElement("li");
liItem.classList.add("item");
liItem.textContent = ingredient
  liArr.push(liItem);
});
listElem.append(...liArr);

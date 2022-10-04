const numberCategories = document.querySelectorAll(`.item`);
const headingsTitle = document.querySelectorAll(`h2`);
console.log(`Number of categories: ${numberCategories.length}`);
headingsTitle.forEach(heading => console.log(`Category: ${heading.textContent} Elements:${heading.nextElementSibling.childElementCount}`));
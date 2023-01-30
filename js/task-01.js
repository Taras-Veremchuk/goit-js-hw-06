const listItem = document.querySelectorAll('.item');
// console.log([...listItem])
console.log(`Number of categories: ${listItem.length}`);
// const listOfCategories = document.querySelectorAll('h2');
// console.log(listOfCategories.textContent);
const myList = [...listItem].map(nmbr =>
(console.log(`Category: ${nmbr.querySelector('h2').textContent}`),
console.log(`Elements: ${nmbr.querySelectorAll('li').length}`)));
// console.log(myList.map(my => my.textContent))
// console.log(document.querySelectorAll('h2'))




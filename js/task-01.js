const listItems = document.querySelectorAll('.item');
// console.log([...listItem])
console.log(`Number of categories: ${listItems.length}`);
// const listOfCategories = document.querySelectorAll('h2');
// console.log(listOfCategories.textContent);
const result = [...listItems].map(item =>
(console.log(`Category: ${item.querySelector('h2').textContent}`),
console.log(`Elements: ${item.querySelectorAll('li').length}`)));
// console.log(myList.map(my => my.textContent))
// console.log(document.querySelectorAll('h2'))
// const how = document.querySelectorAll("#categories h2")
// console.log(how)


const listItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItems.length}`);

const result = [...listItems].map(item =>
(console.log(`Category: ${item.querySelector('h2').textContent}`),
console.log(`Elements: ${item.querySelectorAll('li').length}`)));


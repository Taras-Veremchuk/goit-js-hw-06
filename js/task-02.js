const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ingredientsList = document.querySelector('#ingredients')
// console.log(ingredientsList)
// let listItem = document.createElement("li")
// console.log(listItem)
// listItem.textContent = 
// ingredients.map(ingridient => console.log(` ${ingredientsListItem.textContent = ingridient}, ${ingredientsListItem}`))
// // listItem.textContent = "Potatoes"
ingredients.map((ingredient) =>{
const listItem = document.createElement("li"); 
listItem.textContent = ingredient, 
listItem.classList.add("item"),
// console.log(listItem),
ingredientsList.append(listItem)
});

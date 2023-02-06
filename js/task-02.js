const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsList = document.querySelector('#ingredients')
ingredients.map((ingredient) =>{
const listItem = document.createElement("li"); 
listItem.textContent = ingredient, 
listItem.classList.add("item"),
ingredientsList.append(listItem)
});

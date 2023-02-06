const boxes = document.querySelector("#boxes")
const createElement =  document.querySelector("button[data-create]")
const removeteElement =  document.querySelector("button[data-destroy]")
const input = document.querySelector("input")
let amount = 0;

input.addEventListener("input", (event) => {
  amount = event.currentTarget.value
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

createElement.addEventListener("click", createBoxes);
function createBoxes(){
  if(!input.value){
    alert("Введіть значення");
  }else{
  for(let i = 0; i < amount; i += 1){
    const box = document.createElement("div")

    box.style.width = `${30 + i * 10}px`; 
    box.style.height = `${30 + i * 10}px`; 
    box.style.margin = "10px";
    box.style.borderRadius = "50%";
    box.style.backgroundColor = getRandomHexColor();

  boxes.append(box);
}
}};

removeteElement.addEventListener("click", (event) => {
boxes.innerHTML = "";
input.value = "";
});

const button = document.getElementById("add");
const body = document.body;
const arrayOfColors = ["yellow", "red", "green", "blue", "black","orange", "pink"];

function addHandler() {
  var randomColorIndex = Math.floor(Math.random() * arrayOfColors.length);
  console.log("Color set:", arrayOfColors[randomColorIndex])
  body.style.backgroundColor = arrayOfColors[randomColorIndex];
}

button.addEventListener('click', addHandler);
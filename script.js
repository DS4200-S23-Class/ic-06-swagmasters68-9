const button = document.getElementById("firstButton");
const line = document.getElementById("line");
const circle = document.getElementById("circle");

function colorLine() {
  line.style.stroke = "red";
}

function colorCircle() {
  circle.style.fill = "orange";
}

function uncolorCircle() {
  circle.style.fill = "black";
}

button.addEventListener("click", colorLine);

circle.addEventListener("mouseover", colorCircle);
circle.addEventListener("mouseout", uncolorCircle);

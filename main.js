

let number = 0;
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const num = document.getElementById("number");
num.innerHTML = number;

plus.addEventListener("click", function() {
  num.innerHTML = ++number;
});

minus.addEventListener("click", function() {
  num.innerHTML = --number;
});
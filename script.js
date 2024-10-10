const display = document.querySelector(".bottom-display");
const topDisplay = document.querySelector(".top-display");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let temp = "";

document.addEventListener("click", function (e) {
  const target = e.target.closest("button.numbers");

  if (target) {
    temp += target.textContent;
    display.textContent = temp;
  }
});

document.addEventListener("click", function (e) {
  const target = e.target.closest("button.operator");

  if (target) {
    firstNumber = temp;
    temp = "";
    operator = target.getAttribute("id");
    display.textContent = target.textContent;
    topDisplay.textContent = firstNumber;
  }
});

document.addEventListener("click", function (e) {
  const target = e.target.closest("#clear");
  if (target) {
    firstNumber = "0";
    secondNumber = "0";
    operator = "";
    result = "";
    temp = "";
    topDisplay.textContent = 0;
    display.textContent = 0;
  }
});

document.addEventListener("click", function (e) {
  const target = e.target.closest("#return");
  if (target) {
    secondNumber = temp;
    result = operate(operator, parseInt(firstNumber), parseInt(secondNumber));
    display.textContent = result;
    topDisplay.textContent = 0;
    temp = result;
  }
});

function operate(operator, num1, num2) {
  let result;
  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "substract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
  }
  return result;
}

const backspace = document.querySelector(".backspace");
const dot = document.querySelector(".dot");
const ac = document.querySelector(".AC");
const equals = document.querySelector(".equals");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const times = document.querySelector(".times");
const divide = document.querySelector(".divide");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const resultBox = document.querySelector(".result");

let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;
let lastClickedButton = null;
let display = "";
let numbers = [one, two, three, four, five, six, seven, eight, nine, zero, dot];
let operators = [plus, minus, times, divide];
const operatorsList = ["plus", "minus", "times", "divide"];

function addToDisplay(e) {
  if (display === result) {
    display = resultBox.textContent = "";
  }
  if (operatorsList.includes(lastClickedButton)) {
    display = resultBox.textContent = "";
  }
  if (e.target.className === "dot") {
    if (display.includes(".")) {
      return;
    }
  }
  resultBox.textContent += e.target.textContent;
  display = resultBox.textContent;
}

function getOperator(e) {
  if (operatorsList.includes(lastClickedButton)) {
    secondOperand = null;
  }
  operator = e.target.className;
  firstOperand = display;
}

document.addEventListener("click", (e) => {
  lastClickedButton = e.target.className;
});

numbers.forEach((number) => {
  number.addEventListener("click", addToDisplay);
});

operators.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", getOperator);
});

ac.addEventListener("click", (e) => {
  display = resultBox.textContent = "";
  firstOperand = null;
  secondOperand = null;
});

backspace.addEventListener("click", () => {
  display = resultBox.textContent = resultBox.textContent.slice(
    0,
    resultBox.textContent.length - 1
  );
});

function operate() {
  if (operatorsList.includes(lastClickedButton)) {
    return;
  }
  secondOperand = display;
  display = resultBox.textContent = "";
  switch (operator) {
    case "plus":
      display = resultBox.textContent = +firstOperand + +secondOperand;
      result = display;
      break;
    case "minus":
      display = resultBox.textContent = +firstOperand - +secondOperand;
      result = display;
      break;
    case "times":
      display = resultBox.textContent = +firstOperand * +secondOperand;
      result = display;
      break;
    case "divide":
      display = resultBox.textContent = +firstOperand / +secondOperand;
      result = display;
      break;
    default:
      break;
  }
  operator = null;
}

equals.addEventListener("click", operate);

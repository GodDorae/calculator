const backspace = document.querySelector(".delete");
const init = document.querySelector(".init");
const root = document.querySelector(".root");
const add = document.querySelector(".add");
const substract = document.querySelector(".substract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal");

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const dot = document.querySelector(".dot");

const result = document.querySelector(".result");

const numbers = document.querySelectorAll(".number");

let tmpNumber, tmpCalc, calcOn;

function getInit() {
  result.innerText = "RESULT";
}

function getDelete() {
  if (result.innerText.length === 1) result.innerText = "RESULT";
  else result.innerText = result.innerText.slice(0, -1);
}

function getAdd() {
  tmpNumber = Number(result.innerText);
  tmpCalc = "add";
  calcOn = true;
}

function getSubstract() {
  tmpNumber = Number(result.innerText);
  tmpCalc = "substract";
  calcOn = true;
}

function getMultiply() {
  tmpNumber = Number(result.innerText);
  tmpCalc = "multiply";
  calcOn = true;
}

function getDivide() {
  tmpNumber = Number(result.innerText);
  tmpCalc = "divide";
  calcOn = true;
}

function getRoot() {
  result.innerText = Math.sqrt(Number(result.innerText));
}

function getResult() {
  switch (tmpCalc) {
    case "add":
      result.innerText = tmpNumber + Number(result.innerText);
      tmpNumber = 0;
      tmpCalc = "";
      break;
    case "substract":
      result.innerText = tmpNumber - Number(result.innerText);
      tmpNumber = 0;
      tmpCalc = "";
      break;
    case "multiply":
      result.innerText = tmpNumber * Number(result.innerText);
      tmpNumber = 0;
      tmpCalc = "";
      break;
    case "divide":
      result.innerText = tmpNumber / Number(result.innerText);
      tmpNumber = 0;
      tmpCalc = "";
      break;
  }
}

function putNumber() {
  if (result.innerText === "RESULT") result.innerText = "";
  if (calcOn === true) {
    result.innerText = "";
    calcOn = false;
  }
  result.innerText += this.innerText;
}

function putDot() {
  if (result.innerText === "RESULT") result.innerText = "0";
  result.innerText += ".";
}

for (let i=0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", putNumber);
}
dot.addEventListener("click", putDot);

init.addEventListener("click", getInit);

backspace.addEventListener("click", getDelete);

add.addEventListener("click", getAdd);
substract.addEventListener("click", getSubstract);
multiply.addEventListener("click", getMultiply);
divide.addEventListener("click", getDivide);
root.addEventListener("click", getRoot);

equal.addEventListener("click", getResult);

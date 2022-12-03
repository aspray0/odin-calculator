// script.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
  switch (true) {
    case (operator === '+'):
      return add(num1, num2);
    case (operator === '-'):
      return subtract(num1, num2);
    case (operator === '*'):
      return multiply(num1, num2);
    case (operator === '/'):
      return divide(num1, num2);
  }
}
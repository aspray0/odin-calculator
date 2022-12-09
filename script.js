// script.js

const display = document.querySelector('.display');
display.textContent = '';
let numArray = [];
let opArray = [];
let currentNumString = '';

const opButtons = document.querySelectorAll('.opButton');

const numButtons = document.querySelectorAll('.numButton');
numButtons.forEach(numButton => {
  numButton.addEventListener('click', () => {
    currentNumString = `${currentNumString}` + `${numButton.textContent}`;
    display.textContent = `${display.textContent}` + `${numButton.textContent}`;
  })
});

opButtons.forEach(opButton => {
  opButton.addEventListener('click', () => {

    switch (true) { // If last action was an operator, return
      case (display.textContent === ''):
        return;
      case (display.textContent.charAt(display.textContent.length - 2) === '+'):
        return;
      case (display.textContent.charAt(display.textContent.length - 2) === '-'):
         return;
      case (display.textContent.charAt(display.textContent.length - 2) === '*'):
         return;
      case (display.textContent.charAt(display.textContent.length - 2) === '/'):
        return;
    }

    numArray.push(`${currentNumString}`); // store first number in numArray
    currentNumString = ''; // clear currentNumString
    opArray.push(`${this.textContent}`); // store operator in operator variable
    display.textContent = `${display.textContent}` + ` ${this.textContent} `;
  })
})

// select = button, store in eqButton var
// add eventListener for click that runs a function
// that reduces numArray using operate() and stores the result in a variable
// assign that variable value to currentNumString
// and display.textContent

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
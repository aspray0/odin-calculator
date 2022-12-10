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

    if (display.textContent === 'We don\'t divide by 0 here.') {
      display.textContent = '';
    };

    currentNumString = `${currentNumString}` + `${numButton.textContent}`;
    display.textContent = `${display.textContent}` + `${numButton.textContent}`;
  })
});

opButtons.forEach(opButton => {
  opButton.addEventListener('click', () => {

    if (display.textContent === 'We don\'t divide by 0 here.') {
      display.textContent = '';
    };

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
    opArray.push(`${opButton.textContent}`); // store operator in operator variable
    display.textContent = `${display.textContent}` + ` ${opButton.textContent} `;
  })
});

const clButton = document.querySelector('.clButton');
clButton.addEventListener('click', () => {
  numArray.length = 0;
  opArray.length = 0;
  display.textContent = '';
  currentNumString = '';
});

const dcButton = document.querySelector('.dcButton');
dcButton.addEventListener('click', () => {

  if (display.textContent === 'We don\'t divide by 0 here.') {
    display.textContent = '';
  };

  if (!currentNumString.includes('.')) {
    currentNumString = `${currentNumString}` + `.`
    display.textContent = `${display.textContent}` + `.`;
  };
});

const bkButton = document.querySelector('.bkButton');
bkButton.textContent = '<-';
bkButton.addEventListener('click', () => {

  if (display.textContent === 'We don\'t divide by 0 here.') {
    display.textContent = '';
  };

  if ((currentNumString) || (currentNumString === '0')) {
    currentNumstring = currentNumString.slice(0, -1);
    display.textContent = display.textContent.slice(0, -1);
  };
});

const eqButton = document.querySelector('.eqButton'); // select = button, store in eqButton var
eqButton.addEventListener('click', () => { // add eventListener for click that runs a function

  if (display.textContent === 'We don\'t divide by 0 here.') {
    display.textContent = '';
  };

  if (!(numArray && opArray && currentNumString)) {
    return;
  }

  numArray.push(`${currentNumString}`);
  let result = numArray.reduce((accumulator, currentValue) => operate(accumulator, currentValue)); // that reduces numArray using operate() and stores the result in a variable
  currentNumString = `${result}`; // assign that variable value to currentNumString
  display.textContent = `${result}`; // and display.textContent
  opArray.length = 0;
  numArray = numArray.slice(0, (numArray.length - 2));
});

function roundToEight(num) {
  return +(Math.round(num + 'e+8') + 'e-8');
}

function add(a, b) {
  return roundToEight(+a + +b);
}

function subtract(a, b) {
  return roundToEight(+a - +b);
}

function multiply(a, b) {
  return roundToEight(+a * +b);
}

function divide(a, b) {
  return roundToEight(+a / +b);
}

function operate(num1, num2) {

  let i = 0;

  if ((opArray[i] === '/') && (num2 === '0')) {
    currentNumString = '';
    numArray.length = 0;
    opArray.length = 0;
    return 'We don\'t divide by 0 here.';
  }

  if (num1 === 'We don\'t divide by 0 here.') {
    return num1;
  }

  switch (true) {
    case (opArray[i] === '+'):
      i++;
      return add(num1, num2);
    case (opArray[i] === '-'):
      i++;
      return subtract(num1, num2);
    case (opArray[i] === '*'):
      i++;
      return multiply(num1, num2);
    case (opArray[i] === '/'): 
      i++;
      return divide(num1, num2);      
  }
}
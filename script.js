// script.js

const display = document.querySelector('.display');
display.textContent = '';
let numArray = [];
let opArray = [];
let currentNumString = '';
let j = 0;
let eqFlag = false;


const numButtons = document.querySelectorAll('.numButton');
numButtons.forEach(numButton => {
  numButton.addEventListener('click', () => {

    if (eqFlag) {
      eqFlag = false;
      currentNumString = '';
    }
  
    if (display.textContent === 'No div by 0 >:c') {
      display.textContent = '';
    };
  
    currentNumString = `${currentNumString}` + `${numButton.textContent}`;
    display.textContent = `${display.textContent}` + `${numButton.textContent}`;
  });
});

numButtons.forEach(numButton => {
  numButton.addEventListener('keyup', function(e) {
    if (e.key === `${numButton.textContent}`) {

      if (eqFlag) {
        eqFlag = false;
        currentNumString = '';
      }
    
      if (display.textContent === 'No div by 0 >:c') {
        display.textContent = '';
      };
    
      currentNumString = `${currentNumString}` + `${numButton.textContent}`;
      display.textContent = `${display.textContent}` + `${numButton.textContent}`;
    }
  });
})




const opButtons = document.querySelectorAll('.opButton');
opButtons.forEach(opButton => {
  opButton.addEventListener('click', () => {
      if (eqFlag) {
        eqFlag = false;
        currentNumString = '';
      };
    
      if (display.textContent === 'No div by 0 >:c') {
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
    });
  });


opButtons.forEach(opButton => {
  opButton.addEventListener('keyup', function(e) {
    if (e.key === `${opButton.textContent}`) {
      if (eqFlag) {
        eqFlag = false;
        currentNumString = '';
      };
    
      if (display.textContent === 'No div by 0 >:c') {
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
    };
  });
});


const clButton = document.querySelector('.clButton');
clButton.addEventListener('click', () => {
  numArray.length = 0;
  opArray.length = 0;
  display.textContent = '';
  currentNumString = '';
  j = 0;
  eqFlag = false;
});

clButton.addEventListener('keyup', function(e) {
  if (e.key === `c`) {
    numArray.length = 0;
    opArray.length = 0;
    display.textContent = '';
    currentNumString = '';
    j = 0;
    eqFlag = false;
  }
})

const dcButton = document.querySelector('.dcButton');
dcButton.addEventListener('click', () => {

  if (eqFlag) {
    eqFlag = false;
    currentNumString = '';
  }

  if (display.textContent === 'No div by 0 >:c') {
    display.textContent = '';
  };

  if (!currentNumString.includes('.')) {
    currentNumString = `${currentNumString}` + `.`
    display.textContent = `${display.textContent}` + `.`;
  };
});

dcButton.addEventListener('keyup', function(e) {
  if (e.key === `.`) {

    if (eqFlag) {
      eqFlag = false;
      currentNumString = '';
    }
  
    if (display.textContent === 'No div by 0 >:c') {
      display.textContent = '';
    };
  
    if (!currentNumString.includes('.')) {
      currentNumString = `${currentNumString}` + `.`
      display.textContent = `${display.textContent}` + `.`;
    }
  };
});

const bkButton = document.querySelector('.bkButton');
bkButton.textContent = '<-';
bkButton.addEventListener('click', () => {

  if (eqFlag) {
    eqFlag = false;
    currentNumString = '';
  }

  if (display.textContent === 'No div by 0 >:c') {
    display.textContent = '';
  };

  if ((currentNumString) || (currentNumString === '0')) {
    currentNumString = currentNumString.slice(0, -1);
    display.textContent = display.textContent.slice(0, -1);
  };
});

bkButton.addEventListener('keyup', function(e) {
  if (e.key === `Backspace`) () => {

    if (eqFlag) {
      eqFlag = false;
      currentNumString = '';
    }
  
    if (display.textContent === 'No div by 0 >:c') {
      display.textContent = '';
    };
  
    if ((currentNumString) || (currentNumString === '0')) {
      currentNumstring = currentNumString.slice(0, -1);
      display.textContent = display.textContent.slice(0, -1);
    };
  };
});

const eqButton = document.querySelector('.eqButton'); // select = button, store in eqButton var
eqButton.addEventListener('click', () => { // add eventListener for click that runs a function

  if (eqFlag) return;

  if (display.textContent === 'No div by 0 >:c') {
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
  numArray.length = 0;
  j = 0;
  eqFlag = true;
});

eqButton.addEventListener('keyup', function(e) {
  if (e.key === `=`) () => { // add eventListener for click that runs a function

    if (eqFlag) return;
  
    if (display.textContent === 'No div by 0 >:c') {
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
    numArray.length = 0;
    j = 0;
    eqFlag = true;
    result = 0;
  };
})

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

  if ((opArray[j] === '/') && (num2 === '0')) {
    currentNumString = '';
    numArray.length = 0;
    opArray.length = 0;
    j = 0;
    return 'No div by 0 >:c';
  }

  if (num1 === 'No div by 0 >:c') {
    return num1;
  }

  switch (true) {
    case (opArray[j] === '+'):
      j++;
      return add(num1, num2);
    case (opArray[j] === '-'):
      j++;
      return subtract(num1, num2);
    case (opArray[j] === '*'):
      j++;
      return multiply(num1, num2);
    case (opArray[j] === '/'): 
      j++;
      return divide(num1, num2);      
  }
}
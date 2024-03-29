let operator = undefined
let value1Store = undefined
let value2Store = undefined
let result = undefined
let lastButtonPressed = undefined
let operatorCounter = 0

const operatorsMap = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const operate = function (operator, value1, value2) {
  return operatorsMap[operator](value1, value2);
};

const equalsOperation = function () {
  if (result) {
    result = operate(operator, Number(result), Number(value2Store))
  } else {
    result = operate(operator, Number(value1Store), Number(value2Store))
  }
  console.log(`result is: ${result}`)
  display.value = result
}

const displayValue = function (digit) {
  // atm this is only implemented for number pads
  if (Number(display.value) === result) {
    display.value = digit
  } else {
    display.value = display.value + digit;
  }
}

// let value1Display = document.querySelector('input[name="value1"]');
// let value2Display = document.querySelector('input[name="value2"]');
let display = document.querySelector('input[name="equalDisplay"]');
// let operatorDisplay = document.querySelector('input[name="operator"]')

const numperPad = document.querySelector("#numberPad")
const div1 = document.querySelector("#number1");
const div2 = document.querySelector("#number2");
const div3 = document.querySelector("#number3");
const div4 = document.querySelector("#number4");
const div5 = document.querySelector("#number5");
const div6 = document.querySelector("#number6");
const div7 = document.querySelector("#number7");
const div8 = document.querySelector("#number8");
const div9 = document.querySelector("#number9");
const div0 = document.querySelector("#number0");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");

const storeValue = function(num) {
  if (value1Store === undefined) {
    // when value1Store has nothing yet
    console.log(`inside if (value1Store === undefined)`);
    value1Store = num;
  } else if (!operator) {
    // when operator is not assigned yet and valu1Store already has
    // something
    console.log(`inside else if (!operator)`);
    value1Store = value1Store + num;
  }

  if (operator && value2Store === undefined) {
    // when operator is assigned and value2Store is not assigned yet
    console.log(`inside (operator && value2Store === undefined)`);
    value2Store = num;
  } else if (value2Store && !result) {
    // when value2Store already is assigned so u just add on the
    // numbers
    console.log(`inside else if (value2Store && !result)`);
    value2Store = value2Store + num;
  } else if (Number(display.value) === result) {
    console.log(`inside else if (Number(display.value) === result)`)
    value2Store = num
  } else if (operatorCounter > 1 && result) {
    // when value2Store already is assigned a digit and there is
    // already a result, meaning this is the 3rd number entered, add
    // on to it
    console.log(`inside else if (operatorCounter > 1 && result)`)
    value2Store = value2Store + num;
  } else if (value2Store && result) {
    console.log(`inside else if (value2Store && result)`);
    value2Store = value2Store + num;
  }

  console.log(`value1Store is ${value1Store}`);
  console.log(`value2Store is ${value2Store}`);
}

const lastButtonPressedCheck = function() {
  if (lastButtonPressed === "=") {
    clearFunc()
  } else {

  }
}

const clearFunc = function() {
  operator = undefined
  value1Store = undefined
  value2Store = undefined
  result = undefined
  lastButtonPressed = undefined
  operatorCounter = 0
  display.value = ""
  console.log(`shit been reset to default state`)
}

// numperPad.addEventListener("click", () => {
//   if (lastButtonPressed === "=") {
//     operator = undefined
//     value1Store = undefined
//     value2Store = undefined
//     result = undefined
//     lastButtonPressed = undefined
//     operatorCounter = 0
//     console.log(`cleared cos of equals`)
//   }
// });

div1.addEventListener("click", (event) => {
  lastButtonPressedCheck();
  storeValue("1");
  displayValue("1");
  console.log(event)
});
div2.addEventListener("click", () => {
  lastButtonPressedCheck();
  storeValue("2");
  displayValue("2");
});
div3.addEventListener("click", () => {
  lastButtonPressedCheck();
  storeValue("3");
  displayValue("3");
});
div4.addEventListener("click", () => {
  lastButtonPressedCheck();
  storeValue("4");
  displayValue("4");
});
div5.addEventListener("click", () => {
  lastButtonPressedCheck();
  storeValue("5");
  displayValue("5");
});
div6.addEventListener("click", () => {
  lastButtonPressedCheck();
  storeValue("6");
  displayValue("6");
});
div7.addEventListener("click", () => {
  lastButtonPressedCheck();
  storeValue("7");
  displayValue("7");
});
div8.addEventListener("click", () => {
  lastButtonPressedCheck();
  storeValue("8");
  displayValue("8");
});
div9.addEventListener("click", () => {
  lastButtonPressedCheck();
  storeValue("9");
  displayValue("9");
});
div0.addEventListener("click", () => {
  lastButtonPressedCheck();
  storeValue("0");
  displayValue("0");
});


/*THE OPERATORS */

clear.addEventListener("click", clearFunc)

const operatorGuardClauses = function(op) {
  if (Number(display.value) === result) {
    operator = op;
    // display.value = "";
  } else if (value1Store && value2Store && operator) {
    console.log(`inside else if (value1Store && value2Store && operator)`);
    equalsOperation();
    value2Store = "";
    display.value = result;
  } else {
    operator = op;
    display.value = "";
  }
}

plus.addEventListener("click", () => {
  // if value1Store and value2Store and operator are all
  // already assigned values then run equalsOperation
  
  operatorGuardClauses("+")
  operatorCounter += 1;
  lastButtonPressed = "+";

});

minus.addEventListener("click", () => {
  operatorGuardClauses("-")
  operatorCounter += 1;
  lastButtonPressed = "-";
});

multiply.addEventListener("click", () => {
  operatorGuardClauses("*")
  operatorCounter += 1;
  lastButtonPressed = "*";
});

divide.addEventListener("click", () => {
  operatorGuardClauses("/")
  operatorCounter += 1;
  lastButtonPressed = "/";
});

equals.addEventListener("click", () => {
  equalsOperation()
  lastButtonPressed = "="
})


module.exports = {
  operatorsMap,
  operate,
  equalsOperation,
  displayValue,
  storeValue,
  div1,
  div2,
  div3,
  div4,
  div5,
  div6,
  div7,
  div8,
  div9,
  div0
}
let operator = undefined
let value1Store = undefined
let value2Store = undefined
let result = undefined
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

const div1 = document.querySelector("#number1");
const div2 = document.querySelector("#number2");
const div3 = document.querySelector("#number3");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");

const storeValue = function (num) {
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
  } else if (operatorCounter > 1 && result) {
    // when value2Store already is assigned a digit and there is
    // already a result, meaning this is the 3rd number entered, add
    // on to it
    console.log(`inside else if (operatorCounter > 1 && result)`)
    value2Store += num;
  } else if (value2Store && result) {
    console.log(`inside else if (value2Store && result)`);
    value2Store = value2Store + num;
  }

  console.log(`value1Store is ${value1Store}`);
  console.log(`value2Store is ${value2Store}`);
}

div1.addEventListener("click", () => {
  storeValue("1")
  displayValue("1")
  // if (Number(display.value) === result) {
  //   display.value = "1"
  // } else {
  //   display.value = display.value + "1";
  // }
});
div2.addEventListener("click", () => {
  storeValue("2")
  displayValue("2")
});
div3.addEventListener("click", () => {
  storeValue("3")
  displayValue("3")
});


/*THE OPERATORS */

clear.addEventListener("click", () => {
  operator = undefined
  value1Store = undefined
  value2Store = undefined
  result = undefined
  operatorCounter = 0
  display.value = ""
  console.log(`shit been reset to default state`)
})

plus.addEventListener("click", () => {
  // if value1Store and value2Store and operator are all
  // already assigned values then run equalsOperation
  if (value1Store && value2Store && operator) {
    console.log(`inside plus 1st if`)
    equalsOperation()
    value2Store = ""
    display.value = result
  } else {
    operator = "+";
    display.value = "";  
  }
  
  operatorCounter += 1
});

minus.addEventListener("click", () => {
  operator = "-";
  display.value = "";
});

multiply.addEventListener("click", () => {
  operator = "*";
  display.value = "";
});

divide.addEventListener("click", () => {
  operator = "/";
  display.value = "";
});

equals.addEventListener("click", () => {
  equalsOperation()
})
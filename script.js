// DONE
// clicking "plus" should store value1 and operator to be used in operate()
// it should also indicate somewhere that the "plus" operator has been triggered
// and then optionally clear the screen
// 
// then we can input the next number
// clicking the "equals" div should store value2 and call operate() with the 3 
// params
// DONE

// TODO
// next is writing function that can accumulate the numbers until u 
// press =
  // this would mean u keep assigning prev results to value1?
  // eg. 11 is already entered, then i click + then 11, then when i 
  // click + again it should use operate function to get the result and 
  // assign to value1
  // maybe i should take out the operator call function?
  // when clicking + after 2 numbers have been entered, how do i check
  // that value1 or value2 exist already?

// figure out the logic flow for displaying value2 in box for value2

// DONE
// write the logic to store value1 and value2 and also to display them
  // every number click should display AND store value1 and value2
// and write a "C" div and function to clear all variables 
// DONE

// DONE
// it might be easier to rewrite the logic for + and = rather than
// to improve on it since i keep getting confused by it
// DONE

// NEXT
// figure out how to For example, 12 + 7 - 5 * 3 = should yield 42. 
// An example of the behavior we’re looking for would be this student 
// solution.
  // this means if value1Store and value2Store and operator are all
  // already assigned values, clicking another operator again shd
  // perform the equivalent of the equals function
  //
  // have to modify equalsOperation() so that when i press 1 + 2 + 3
  // it clears the display when i press 3 after the 2nd +

// NEXT
// You should round answers with long decimals so that they don’t 
// overflow the screen.


let operator = undefined

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
    result = operate(operator, Number(value2Store), Number(result))
  } else {
    result = operate(operator, Number(value1Store), Number(value2Store))
  }
  console.log(`result is: ${result}`)
  display.value = result
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

let value1Store = undefined
let value2Store = undefined
let result = undefined

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
    value2Store = value2Store + num;}
  // } else if (value2Store.length >= 1 && result) {
  //   // when value2Store already is assigned a digit and there is 
  //   // already a result, meaning this is the 3rd number entered, add 
  //   // on to it
  //   value2Store = value2Store + num} 
    else if (value2Store && result) {
    value2Store = num
  };
  
  console.log(`value1Store is currently: ${value1Store}`);
  console.log(`value2Store is currently: ${value2Store}`);
}

div1.addEventListener("click", () => {
  storeValue("1")
  display.value = display.value + "1";
});
div2.addEventListener("click", () => {
  storeValue("2")
  display.value = display.value + "2";
});
div3.addEventListener("click", () => {
  storeValue("3")
  display.value = display.value + "3";
});



/*THE OPERATORS */

clear.addEventListener("click", () => {
  operator = undefined
  value1Store = undefined
  value2Store = undefined
  result = undefined
  display.value = ""
  console.log(`shit is cleared and reset to default state`)
})

plus.addEventListener("click", () => {
  // if value1Store and value2Store and operator are all
  // already assigned values then run equalsOperation
  if (value1Store && value2Store && operator) {
    console.log(`inside plus 1st if`)
    equalsOperation()
    display.value = ""
  } else {
    operator = "+";
    display.value = "";  
  }
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
// Get and Assign the input
let firstValue = Number(prompt("Enter first value"));
let secondValue = Number(prompt("Enter second value"));

// Select the operation to be carried out
opr = prompt("Enter operator from the list below: +, -, *, /, %");

// Make calculations based on decided operation
if (opr == "+"){
  result = firstValue + secondValue;
} else if (opr == "-"){
  result = firstValue - secondValue;
} else if (opr == "*"){
  result = firstValue * secondValue;
} else if (opr == "/"){
  result = firstValue / secondValue;
} else if (opr == "%"){
  result = firstValue % secondValue;
}

// Print the result to screen
alert("Your result is " + result);
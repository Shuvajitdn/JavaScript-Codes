// Prompt the user to enter two numbers and the operation
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /):");

// Perform the calculation based on the operation using a switch statement
let result;
switch (operation) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operation");
}

// Display the result to the user
console.log("Result: " + result);

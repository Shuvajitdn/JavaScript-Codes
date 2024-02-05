// Prompt the user to enter the limit
var limit = parseInt(prompt("Enter the limit:"));

// Initialize the sum variable
var sum = 0;

// Iterate from 1 to the entered limit
for (var i = 1; i <= limit; i++) {
   // Add each number to the sum
   sum += i;
}

// Print the sum in alert box
alert("The sum of natural numbers up to " + limit + " is: " + sum);

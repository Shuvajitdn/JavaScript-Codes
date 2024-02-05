//for loop

// for(let i=1;i<=5;i++) {
//     console.log("Shuvajit Debnath");
// }

//Calculate sum of 1 to 100

// let sum = 0;
// for(let i=1;i<=100;i++) {
//     sum = sum + i;
// }
// console.log("sum =", sum);

// While loop

// let i = 1;
// while(i <= 5) {
//     console.log("Shuvajit Debnath");
//     i++;
// }

// do-while loop

// let i=1;
// do{
//     console.log("i=", i);
//     i++;
// } while(i<=5);

//for-of loop

// let str = "Apna College";
// let size=0;

// for (let i of str) {
//     console.log("i=",i);
//     size++;
// }

// console.log("string size=", size);

// for-in loop

// let student = {
//     name: "Shuvajit Debnath",
//     age: 25,
//     cgpa: 7.5,
//     isPass:true
// };

// for(let key in student) {
//     console.log("key=", key, "value=", student[key]);
// }

// Q:1-> print all even numbers from 1 to 100

// for(let num=0; num<=100; num++) {
//     if(num%2==0){
//         console.log("num=", num);
//     }
// }

// Q:2-> print all odd numbers from 1 to 100

// for(let num=0; num<=100; num++) {
//     if(num%2!==0){
//         console.log("num=", num);
//     }
// }


// Q:3-> Create a game where you start with any random game Number.Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 30;
let userNum = prompt("Guess the game number : ");

while(userNum != gameNum) {
    userNum = prompt("You enter wrong number, Guess again : ");
}

console.log("Congratulations, you entered the right number");

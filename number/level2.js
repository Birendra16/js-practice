//Q8	Round the number 8.7 down to the nearest integer.	Math.floor()
//Q9	Round the number 12.3 up to the nearest integer.	Math.ceil()
//Q10	Round the number 7.49 to the nearest integer.	Math.round()
//Q11	Find the largest number in the set: 5, 10, -3, 22.	Math.max()
//Q12	Find the smallest number in the set: 1, 50, 0, -9.	Math.min()
//Q13	Generate a random floating-point number between 0 (inclusive) and 1 (exclusive).
let numA = 8.7;
let numB = 12.3;
let numC = 7.49;
let largest = Math.max(5, 10, -3, 22);
let smallest = Math.min(1, 50, 0, -9);
let randomNum = Math.random(2,6);
let roundDown = Math.floor(numA);
let roundUp = Math.ceil(numB);
let roundNearest = Math.round(numC);
console.log("Round Down 8.7: " + roundDown);
console.log("Round Up 12.3: " + roundUp);
console.log("Round Nearest 7.49: " + roundNearest);
console.log("Largest Number: " + largest);
console.log("Smallest Number: " + smallest);
console.log("Random Number between 0 and 1: " + randomNum);

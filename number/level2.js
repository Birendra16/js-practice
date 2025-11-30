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

// Q14. Convert the string "150" to a number.
let str= "150"
console.log(Number(str));  // 150

// Q15. Convert the string "99.99" to a decimal number.
let str1="99.99"
console.log(parseFloat(str1));  // 99.99

// Q16. Convert the string "200px" to an integer.
let str2="200px"
console.log(parseInt(str2));  // 200

// Q17. Convert the boolean true to a number.
let boolValue1= true;
let boolValue2= false;
console.log(Number(boolValue1));   // 1
console.log(Number(boolValue2));  // 2

// Q18. Format the number 45.4567 to 2 decimal places.
let num = 45.4567;
console.log(num.toFixed(3));  // 45.46

// Q19. Convert the number 500 to a string.
let num1= 500;
console.log(typeof(num1));   // number
let output=num1.toString();
console.log(output);         // 500
console.log(typeof(output));  // string

// Q20. Check if "abc" is Not a Number.
let value= "abc";
console.log(isNaN(value));   // true

// Q21. Check if NaN is really NaN. 
let value1= NaN;
console.log(Number.isNaN(value1));   // true

// Q23. Check if 25.5 is an integer. 
let value3= 25.5;
console.log(Number.isInteger(value3));  // false

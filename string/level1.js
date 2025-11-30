const name1='hari';
//Q1 Output should be 'Hello hari'
//hint use + operator to attach 'hello' to name variable
let greet = 'Hello ' + name1;
console.log(greet);

// Q2.Output should be 'ari'
let slStr = name1.slice(1);
console.log(slStr);

// Q3 Output should be HARI
let upperStr = name1.toUpperCase();
console.log(upperStr);

let word ='typescript';
// Output should be javascript'
let output=word.replace('type','java');
console.log(output);


let greeting = '  hello world  '
// output should be hello world
console.log(greeting.trim());

const language='nodejs';
//output should be 6
console.log(language.length);

// find the index of j in language variable, output should be 4
console.log(language.indexOf('j'));


const framework ='nodejs'
//check if the framework variable contains 'js', output should be true.
console.log(framework.includes('js'));

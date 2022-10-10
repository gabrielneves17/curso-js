// IEEE 754-2008 Padrão

let num1 = 0.7; // Number
let num2 = 0.1; // Number
num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));

/*
console.log(num1.toString() + num2) 
num1 = num1.toString();
console.log(num1.toFixed(4));
console.log(Number.isInteger(num1));
let temp = num1 * '5';
console.log(Number.isNaN(temp));
*/

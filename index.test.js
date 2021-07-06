var {
  isEven,
  isOdd,
  parseInt,
  parseFloat,
  isPrime
} = require("./index");

console.log("isNumberic(10e4)-> ", isNumber(10));
console.log('isNumberic("10")-> ', isNumber("10"));
console.log('isNumberic("")-> ', isNumber(""));
console.log("isNumberic(undefined)-> ", isNumber(undefined));
console.log("isNumberic(null)-> ", isNumber(null));
console.log("isNumberic(abc)-> ", isNumber("abc"));

console.log("\n");
console.log("isEven(10)-> ", isEven(10));
console.log("isEven(9)-> ", isEven(9));

console.log("\n");
console.log("isOdd(10)-> ", isOdd(10));
console.log("isOdd(9)-> ", isOdd(9));

console.log("\n");
console.log("parseInt(10.7) -->", parseInt("10.7"));
console.log("parseFloat(10.7) -->", parseFloat("10.7"));


console.log("\n");
console.log("isPrime(10)-> ", isPrime(10));
console.log("isPrime(7)-> ", isPrime(7));
console.log('isPrime("A")-> ', isPrime("A"));
console.log("isPrime(undefined)-> ", isPrime(undefined));

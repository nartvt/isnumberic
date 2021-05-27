var { isNumber, isEven, isOdd, isNotNumber, parseFloat, parseInt } = require("./index");

console.log("isNumberic(10)-> ", isNumber(10));
console.log('isNumberic("10")-> ', isNumber("10"));
console.log('isNumberic("")-> ', isNumber(""));
console.log("isNumberic(undefined)-> ", isNumber(undefined));
console.log("isNumberic(null)-> ", isNumber(null));
console.log("isNumberic(abc)-> ", isNumber("abc"));

console.log("\n");
console.log("isNotNumber(10)-> ", isNotNumber(10));
console.log('isNotNumber("10")-> ', isNotNumber("10"));
console.log('isNotNumber("")-> ', isNotNumber(""));
console.log("isNotNumber(undefined)-> ", isNotNumber(undefined));
console.log("isNotNumber(null)-> ", isNotNumber(null));
console.log("isNotNumber(abc)-> ", isNotNumber("abc"));

console.log("\n");
console.log("isEven(10)-> ", isEven(10));
console.log("isEven(9)-> ", isEven(9));

console.log("\n");
console.log("isOdd(10)-> ", isOdd(10));
console.log("isOdd(9)-> ", isOdd(9));



console.log("parseFloat(\"10.7\") ->", parseFloat("10.7"))

console.log("parseInt(\"10.7\") ->", parseInt("10.7"))

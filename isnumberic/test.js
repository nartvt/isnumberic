import { isNumberic, isEven, isOdd } from "./isnumberic.js";

console.log("isNumberic(10)-> ", isNumberic(10));
console.log('isNumberic("10")-> ', isNumberic("10"));
console.log('isNumberic("")-> ', isNumberic(""));
console.log("isNumberic(undefined)-> ", isNumberic(undefined));
console.log("isNumberic(null)-> ", isNumberic(null));
console.log("isNumberic(abc)-> ", isNumberic("abc"));
console.log("\n")
console.log("isEven(10)-> ", isEven(10));
console.log("isEven(9)-> ", isEven(9));
console.log("\n")
console.log("isOdd(10)-> ", isOdd(10));
console.log("isOdd(9)-> ", isOdd(9));

# Example
    var { 
        isNumber, 
        isEven, 
        isOdd
        parseInt,
        parseFloat,
        isPrime,
     } = require("./index");

## isNumber(value)
    isNumber(10); -> true
    isNumber("10");  -> true 
    isNumber(""); -> false 
    isNumber(undefined); -> false
    isNumber(null);  -> false
    isNumber("abc");  -> false

## isEven(value)
    isEven(10);  -> true
    isEven(9);  -> false
    isEven("a12"); ->  false;
    isEven(undefined); ->  false;
    isEven(null);  ->  false;

## isOdd(value)
    isOdd(10);  -> false
    isOdd(9);  -> true
    isOdd("abc");  ->  false;
    isOdd(undefined); ->  false;
    isOdd(null);  ->  false;

## parseInt(value), 
    parseInt("10.7"); -> 10
    parseInt("1a"); -> throw "Input parameter is not a number!";
## parseFloat(value)
    parseFloat("10.7"); -> 10.7
    parseFloat("a"); ->  throw "Input parameter is not a number!";

## isPrime(number)
    isPrime(10); -> false
    isPrime(7); -> true
    isPrime("A"); -> false
    isPrime(undefined); -> false
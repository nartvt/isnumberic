# Example

    var { isNumber, isEven, isOdd, isNotNumber, parseInt, parseFloat } = require("./index");

## isNumber(value)

    isNumber(10); -> true
    isNumber("10");  -> true 
    isNumber(""); -> false 
    isNumber(undefined); -> false
    isNumber(null);  -> false
    isNumber("abc");  -> false

## isNotNumber(value)

    isNotNumber(10); -> false
    isNotNumber("10");  -> false 
    isNotNumber(""); -> true 
    isNotNumber(undefined); -> false
    isNotNumber(null);  -> true
    isNotNumber("abc");  -> true

## isEven(value)

    isEven(10);  -> true
    isEven(9);  -> false
    isEven("a12");  ->  throw "Input parameter is not a number!";
    isEven(undefined); ->  throw "Input parameter is not a number!";
    isEven(null);  ->  throw "Input parameter is not a number!";

## isOdd(value)

    isOdd(10);  -> false
    isOdd(9);  -> true
    isOdd("abc");  ->  throw "Input parameter is not a number!";
    isOdd(undefined); ->  throw "Input parameter is not a number!";
    isOdd(null);  ->  throw "Input parameter is not a number!";

## parseInt(value), parseFloat(value)
    parseInt("10.7"); -> 10
    parseFloat("10.7"); -> 10.7

    parseInt("1a"); -> throw "Input parameter is not a number!";
    parseFloat("a"); ->  throw "Input parameter is not a number!";
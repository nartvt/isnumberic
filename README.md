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

## isPrime(number)
    isPrime(10); -> false
    isPrime(7); -> true
    isPrime("A"); -> false
    isPrime(undefined); -> false

## findPrimeToN(number)
    findPrimeToN(500); -> [
        2,   3,   5,   7,  11,  13,  17,  19,  23,  29,  31,  37,
        41,  43,  47,  53,  59,  61,  67,  71,  73,  79,  83,  89,
        97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
        157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223,
        227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
        283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
        367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433,
        439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499]
    
    findPrimeToN("A"); -> []
    findPrimeToN(undefined); -> []
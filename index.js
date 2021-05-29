const messageError = "Input parameter is not a number format!";
function isNumber(num) {
  if (typeof (num) === "number") {
    return true;
  } else if (typeof (num) === "string") {
    if (num === "") {
      return false;
    }
    return isNaN(num) ? false : true;
  }else{
    return false;
  }
}

function isNumeric(num) {
  return isNumber(num)
}

function isNotNumber(num) {
  return !isNumber(num)
}

function parseInt(num) {
   if(isNumber(num)){
     return Number.parseInt(num);
   }
   throw "Input parameter is not a number!";
}


function parseFloat(num) {
  if(isNumber(num)){
    return Number.parseFloat(num);
  }
  throw "Input parameter is not a number!";
}

function isOdd(num) {
  if (isNumber(num)) {
    if (Number(num) % 2 === 0) {
      return false;
    }
    return true;
  }
  throw messageError;
}

function isEven(num) {
  if (isNumber(num)) {
    return !isOdd(num);
  }
  throw messageError;
}


function isPrime(num) {
  if (isNumeric(num)) {
    let value = parseInt(num);
    if (value < 2) return false;
    for (let i = 2; i * i <= value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}


function findPrimeToN(number) {
  let sieveOfEratosthenes = []
  if (isNumber(number)) {
    let N = parseInt(number);
    let primes = Array.from({ length: N + 1 }, () => true)
    primes[0] = false;
    primes[1] = false;
    for (let i = 2; i <= N; ++i) {
      if (primes[i]) {
        // Mark all the multiples of i as composite numbers
        for (let j = i * i; j <= N; j += i) {
          primes[j] = false;
        }
      }
      if (primes[i]) {
        sieveOfEratosthenes.push(i)
      }
    }
  }
  return sieveOfEratosthenes;
}

<<<<<<< HEAD
module.exports = { isNumber, isOdd, isEven, isNotNumber,parseInt, parseFloat };
=======
module.exports = {
  isNumber,
  isOdd,
  isEven,
  isNotNumber,
  isNumeric,
  isPrime,
  findPrimeToN
};
>>>>>>> isPrime, all of prime To N

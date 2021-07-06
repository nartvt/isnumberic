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
  return false;
}

function isEven(num) {
  if (isNumber(num)) {
    return !isOdd(num);
  }
  return false;
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


module.exports = {
  isOdd,
  isEven,
  isNumeric,
  parseInt,
  parseFloat,
  isPrime
};

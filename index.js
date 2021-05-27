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
  throw "Input parameter is not a number!";
}

function isEven(num) {
  if (isNumber(num)) {
    return !isOdd(num);
  }
  throw "Input parameter is not a number!";
}

module.exports = { isNumber, isOdd, isEven, isNotNumber,parseInt, parseFloat };

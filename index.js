function isNumber(num) {
  if (num === undefined) {
    return false;
  }
  if (num === null) {
    return false;
  }
  if (Number(num) === Number.Infinity) {
    return false;
  }
  if (Number(num) === Number.NaN) {
    return false;
  }
  if (typeof (num) === "number") {
    return true;
  } else if (typeof (num) === "string") {
    if (num === "") {
      return false;
    }
    return isNaN(num) ? false : true;
  }
}

function isNotNumber(num) {
  return !isNumber(num)
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

module.exports = { isNumber, isOdd, isEven, isNotNumber };

function isNummeric(num) {
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
  if (typeof num === "number") {
    return true;
  } else if (typeof num === "string") {
    if (num === "") {
      return false;
    }
    return isNaN(num) ? false : true;
  }
}

console.log("1 - ", isNummeric(undefined));
console.log("2 - ", isNummeric(null));
console.log("3 - ", isNummeric("123456"));
console.log("4 - ", isNummeric(123456));
console.log("5 - ", isNummeric(""));
console.log("6 - ", isNummeric("12.3"));
console.log("7 - ", isNummeric("sa"));
console.log("8 - ", isNummeric("12sa"));

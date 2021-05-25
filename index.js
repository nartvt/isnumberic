function isNumberic(num) {
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
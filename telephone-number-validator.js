function telephoneCheck(str) {
  let numbersArr = str.split("");

  if (numbersArr.indexOf("?") >= 0) return false;
  if (numbersArr[0] == "(" && numbersArr[4] != ")") return false;
  if (numbersArr[0] != "(" && numbersArr[0].match(/[^0-9]/)) return false;
  if (numbersArr.indexOf(")") >= 0 && numbersArr.indexOf("(") < 0) return false;
  if (numbersArr.indexOf("(") >= 0 && numbersArr.indexOf(")") < 0) return false;
  if (numbersArr.indexOf("-") >= 0) {
    let index = numbersArr.indexOf("-");
    if (
      numbersArr[index + 1] == "-" ||
      numbersArr[index + 2] == "-" ||
      numbersArr[index + 3] == "-"
    )
      return false;
  }

  let numbers = numbersArr
    .map((j) => parseInt(j))
    .filter((i) => !Number.isNaN(i));

  switch (numbers.length) {
    case 10:
      return true;
    case 11:
      if (numbers[0] == 1) return true;
      return false;
    default:
      return false;
  }
}

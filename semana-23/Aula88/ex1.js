function firstRecurringChar(string) {
  const stringToCheck = string.toLowerCase()
  const charHash = []

  for (i = 0; i < stringToCheck.length; i++) {

    if (charHash.indexOf(stringToCheck[i]) !== -1) {
      return stringToCheck[i];
    }
    else {
      charHash.push(stringToCheck[i]);
    }

  }

  return null;

}
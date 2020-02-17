function firstRecurringChar(string) {

    const charHash = {}

    for (const char of string) {

      if (charHash[char] === true) {
        return char
      } else {
        charHash[char] = true
      }
      

    }

    return null

}
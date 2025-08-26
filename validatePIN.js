function validatePIN(pin) {
  // Regex explanation:
  // ^ and $ → match the start and end of the string (so it must match the whole input)
  // \d{4}   → exactly 4 digits
  // \d{6}   → exactly 6 digits
  // (\d{4}|\d{6}) → input must be either 4 OR 6 digits long
  const regex = /^(\d{4}|\d{6})$/;

  // test() returns true if 'pin' matches the regex, otherwise false
  return regex.test(pin);
}

// Test cases
console.log(validatePIN("13"));    // false → only 2 digits, not valid
console.log(validatePIN("1254"));  // true  → exactly 4 digits, valid
console.log(validatePIN("123456"));// true  → exactly 6 digits, valid
console.log(validatePIN("12a4"));  // false → contains a letter, invalid

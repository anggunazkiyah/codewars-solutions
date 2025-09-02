function sumStr(a,b) {
  // Convert string parameters to numbers
  const num1 = Number(a);
  const num2 = Number(b);
  
  // Calculate the sum of the two numbers
  const sum = num1 + num2;
  
  // Convert the result back to string format and return
  return sum.toString();
}

// Test Cases
console.log(sumStr("4", "9")); // Output: 13
console.log(sumStr("", "")); // Output: 0
console.log(sumStr("-2", "9")); // Output: 7

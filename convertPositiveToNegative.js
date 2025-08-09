// Make a function that converts any number to negative
// The number can be negative already, in which case no change is required
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// Function implementation
function makeNegative(num) { 
  return -Math.abs(num);
}

// Test cases
console.log(makeNegative(1));     // Expected: -1
console.log(makeNegative(-5));    // Expected: -5
console.log(makeNegative(0));     // Expected: 0
console.log(makeNegative(0.12));  // Expected: -0.12
console.log(makeNegative(27));    // Expected: -27

function problem(x){
  //your code here
  if (typeof x === "number") {
    return (x * 50) + 6;
  } else {
    return "Error";
  }
}

// Test cases
console.log(problem(5));     // Should output: 256
console.log(problem(10));    // Should output: 506
console.log(problem("abc")); // Should output: "Error"
console.log(problem(true));  // Should output: "Error"
console.log(problem(0));     // Should output: 6

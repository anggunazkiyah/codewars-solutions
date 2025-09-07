function getSum(a, b) {
  if (a === b) return a;
  if (a < b) {
    return a + getSum(a+1, b)
  } else {
    return a + getSum(a-1, b)
  }
}

//Testing
console.log(getSum(1, 0)); //Expected output: 1 (1 + 0 = 1)
console.log(getSum(1, 2)); //Expected output: 3 (1 + 2 = 3)
console.log(getSum(0, 1)); //Expected output: 1 (0 + 1 = 1)
console.log(getSum(1, 1)); //Expected output: 1 (1 since both are same)
console.log(getSum(-1, 0)); //Expected output: -1 (-1 + 0 = -1)
console.log(getSum(-1, 2)); //Expected output: 2 (-1 + 0 + 1 + 2 = 2)

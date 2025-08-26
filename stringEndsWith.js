function solution(str, ending){
  // Convert both inputs to strings to avoid errors if numbers are passed
  // Then check if 'str' ends with 'ending'
  return String(str).endsWith(String(ending));
}

// Test cases
console.log(solution("Hello", "lo"));      // true: "Hello" ends with "lo"
console.log(solution("this is Kio", "io"));// true: "this is Kio" ends with "io"
console.log(solution(123, 12));            // false: "123" does not end with "12"
console.log(solution(123, 3));             // true: "123" ends with "3"

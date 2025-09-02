function removeExclamationMarks(s) {
  // Use regex with global flag (/!/g) to find and replace ALL exclamation marks
  // The 'g' flag ensures we replace every occurrence, not just the first one
  return s.replace(/!/g,'');
}

// Test cases
console.log(removeExclamationMarks("!")); // Output: empty string ("")
console.log(removeExclamationMarks("Halo!")); // Output: "Halo"
console.log(removeExclamationMarks("!imprtant topic")) // Output: "important topic"

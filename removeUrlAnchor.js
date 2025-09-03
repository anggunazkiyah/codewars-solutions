function removeUrlAnchor(url){
  // TODO: complete
  const parts = url.split("#");
  return parts[0];
}

// Test Cases
console.log(removeUrlAnchor("www.codewars.com#about")); //Expected Output: "www.codewars.com"
console.log(removeUrlAnchor("www.codewars.com?page=1")); //Expected Output: "www.codewars.com?page=1"

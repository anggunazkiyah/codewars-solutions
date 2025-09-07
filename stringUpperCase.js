/* 
Task
Create a method to see whether the string is ALL CAPS.
*/ 

String.prototype.isUpperCase = function() {
  // your code here
  return this.valueOf().toUpperCase() === this.valueOf();
}

//Test cases
"c".isUpperCase(); //Expected output: False
"C".isUpperCase(); //Expected output: True
"hello I AM DONALD".isUpperCase(); //Expected output: False
"HELLO I AM DONALD".isUpperCase(); //Expected output: True
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase(); //Expected output: False
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase(); //Expected output: True

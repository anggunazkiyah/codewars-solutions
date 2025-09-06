function disemvowel(str) {
  return str.replace(/[aiueo]/gi, "") ;
}

//Testing
console.log(disemvowel("This website is for losers LOL!")); //Expected output: Ths wbst s fr lsrs LL!
console.log(disemvowel("ivT")); //Expected output: vT
console.log(disemvowel("eexS")); //Expected output: xS
console.log(disemvowel("GPxElJp AYIgi")); //Expected output: GPxlJp Yg

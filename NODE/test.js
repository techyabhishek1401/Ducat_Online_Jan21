console.log("Welcome TO NODEJS");
function reverse(str) {
  return str.split("").reverse().join("");
}

const reverse_arrow = (str) => str.toString().split("").reverse().join("");

let reve = reverse("Abhishek");
console.log("reversed name:", reve);
console.log("reversed_arrow name:", reverse_arrow("KUMAR"));

/* 
write a number to check whether a number is pallindrome or not
*/
const check_pallindrome = (str) => str == reverse_arrow(str);

let pallindrome_check = check_pallindrome("NAMAN");

console.log("PALLINDROME:", pallindrome_check);

/*
Write a function to highlight the words whose length is greater equal to 8
Hey ,you are not permitted in there.
*/

(function (){
  console.log('hello from self calling function')
})()
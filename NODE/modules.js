const fun = require("./import_export/checkEven");

console.log("CHECKEVEN:", fun);
/* library that are used for some functioning*/
console.log("hello");
console.log("bye bye");
console.log("hi Again");

//setTimeout(() => console.clear(), 3000);
console.group("testing");
console.log("testing1");
console.log("testing2");
console.log("testing3");
console.groupEnd();

let some_data = [1, 2, 3, 4, 5, 6];
let some_data2 = [
  { a: 1, b: "Y" },
  { a: "Z", b: 2 },
];
console.log(some_data2);
console.table(some_data2);

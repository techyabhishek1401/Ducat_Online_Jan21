(function (exports, require, module, __filename, __dirname) { 
  
const  fs=require('fs');
const checkEven = (num) => num % 2 === 0;
const checkOdd = (num) => num % 2 !== 0;

module.exports = {
  checkEven,
  checkOdd,
};

})()
//export default checkEven;

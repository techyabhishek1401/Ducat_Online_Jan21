// function checkEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else return false;
// }

const checkEven = (num) => num % 2 === 0;
const checkOdd = (num) => num % 2 !== 0;

module.exports = {
  checkEven,
  checkOdd,
};
//export default checkEven;

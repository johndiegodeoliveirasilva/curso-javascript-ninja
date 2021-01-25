// Escopo de funcao

function myFunction() {
  
  function sum() {
    return number1 + number2;
  }
  var number1 = 1;
  var number2 = 2;
  return sum();
}
console.log(myFunction())
// IIFE
// (function() {
//   console.log( 1 + 2);
// })();



var name = "John"
name.length

// Construtores

var name = new String('John')
name.valueOf() // John 


///
function subtration(num1, num2) {
  if ( typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 - num2; 
  }
  else if (typeof num1 === null) {
    return 'Nao entre com valores nulos!'
  } 
  return 'Entre com dois numeros'
}
console.log(subtration(10, 2))
console.log(subtration('Js', 2))
console.log(subtration([], []))


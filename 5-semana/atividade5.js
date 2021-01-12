/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 
var myArray = [2,5,6,1,4] 

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(arg) {
  return arg
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

myFunction(myArray)[2]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParams(arg1, arg2) {
  return arg1[arg2]
}

/* 
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

fiveTypes = [1, true, ['string', 1], 'String', function() { return "Ola"}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
fiveTypes[4]
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(name) {
  
  var myBooks = {
    "Codigo Limpo": {
      quantidadePaginas: 456,
      autor: "Robert C. Martin",
      editora: "Alta Books"
  },"Refatoracao": {
      quantidadePaginas: 456,
      autor: "Martin Fowler",
      editora: "Novatec"
  },"O codificador Limpo": {
      quantidadePaginas: 244,
      autor: "Robert C.Martion",
      editora: "Alta Books"
  }
 }
 return !name ? myBooks :myBooks[name] 
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book())
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
var nameBook = 'Codigo Limpo'
console.log( `O livro ${nameBook} tem ${book('Codigo Limpo').quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log( `O autor do livro ${nameBook} tem ${book('Codigo Limpo').autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( `O livro ${nameBook} foi publicado pela editora ${book('Codigo Limpo').editora}.`)

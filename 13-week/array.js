array = [ 1, 2, 3, 4, 5, 6 ]

array.unshift( 0 ) ; // put value first position and return the lenght

// Splice
// Remove first position 
array.slice(1)

// Remove firt position plus three position

array.slice(1, 3)

// add 
array.slice(1, 0, 2, 4, 5)


// For Each

var arr = [1, 2, 3, 4, 5, 6, 7]

arr.forEach(function( item, index, array){
  console.log( item, index, array)
})

sum = 0

arr.forEach(function(item){
  sum += item
})

sum

// Every

arr.every(function(item) {
  return item < 6
})

// Some

arr.some(function(item){
  return item < 5
})


// Map
  var arr = [1, 2, 3, 4, 5];

  var map = arr.map(function(item, index, array){
    return { index: index,  item: item}
  })

  // Filter

  var filter = arr.filter(function(item, index, array) {
    return item > 2

  })

  // Concat map and filter

var map = arr.map(function(item){
  return item + 10;
}).filter(function(item){
  return item > 13;
});

console.log(map)
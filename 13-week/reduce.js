  var arr = [ 1, 2, 3, 4, 5];

var arr = ['J', 'o', 'h', 'n']

var reduce = arr.reduceRight(function(acumulado, atual, index, array) {
  return acumulado + atual
}, 0);

console.log(reduce)



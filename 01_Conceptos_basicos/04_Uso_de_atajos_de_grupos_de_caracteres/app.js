//var expresion1 = /[0123456789]/;
var expresion1 = /\d\d-\d\d-\d\d\d\d/;
var expresion2 = /\d\d-\w\w\w\w\w-\d\d\d\d/;

console.log(expresion1.test('29-junio-2007'));
console.log(expresion2.test('29-junio-2007'));

//29-06-2007
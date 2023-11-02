/*
* typeof is an actually operator, it is called unary operator.
* we give something in it and it tells us what kind of things we are dealing it.
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
*/

console.log(typeof 42); // => 'number'
console.log(typeof 'kyle'); // => 'string'
console.log(typeof true); // => 'boolean'
console.log(typeof undefined); // => 'undefined'
console.log(typeof {age: 39}); // => 'object'
console.log(typeof null); // => 'object' [historical bug]
console.log(typeof [1, 2, 3]); // => 'object' (array is a subtype of object)

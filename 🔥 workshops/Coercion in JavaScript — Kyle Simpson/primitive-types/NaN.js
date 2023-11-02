// NaN is not a Number, rather than it is an invalid numeric value.
// null is a keyword and undefined is identifer.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
"use strict"
let x = void 45;
console.log(x); // undefined [The void operator evaluates the given expression and then returns undefined.]

let y = void [1,2,3];
console.log(y); // undefined

let z = void '45';
console.log(z); // undefined

let a = 'a' / 2;
console.log(a); // NaN
console.log(typeof a); // 'number' [typeof NaN is a number]
console.log(isNaN(a)); // true

console.log(isNaN('foo')); //  => true | Bug - 'foo' is string not a number
console.log(NaN === NaN); // false [WTF]
console.log(NaN == NaN); // false

// For number values, isNaN() tests if the number is the value NaN. When the argument to the isNaN() function is not of type Number, the value is first coerced to a number, and the resulting value is then compared against NaN.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

console.log(Number.isNaN('foo')); // false

// Number.isNaN() doesn't attempt to convert the parameter to a number, so non-numbers always return false.
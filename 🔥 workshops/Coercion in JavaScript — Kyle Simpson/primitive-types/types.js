/*
Core Types =>
1) undefined
2) string
3) number [integer, float]
4) boolean
5) object [(function, array, null) are subtype of object type]

null is an empty object value and undefined is empty value...
*/

"use strict"
console.log(typeof(cool)); // 'undefined'
console.log(typeof('cool')); // 'string'
console.log(typeof(123)); // 'number'
console.log(typeof(['cool'])); // 'object' 
console.log(typeof(null)); // 'object'
console.log(typeof({'a': 1})); // 'object'
console.log(typeof(function x(){})); // 'function'

console.log();

// JavaScript doesn't have variable types, it has value types.
// "typeof a" doesn't mean what's the type of "a", rather actually mean what's the type of value that currently in it.

// Gotchas
var foo;
console.log(typeof(foo)); // 'undefined' [it's not same as undefined type]

var bar = typeof(bar);
console.log(bar); // 'undefined'
console.log(typeof(bar)); // 'string'

console.log(typeof(typeof(2))); // 'string'
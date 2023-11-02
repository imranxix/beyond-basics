/* 
String
Boolean
Number
Function
Object
Array
RegexExp
Date
Error

=> above al these are all not native types, they are kinda native objects
String(), Boolean(), Number() are for type coercion, don't use "new" in front of any of it
*/

var foo = new String('foo'); // constructor form of string
console.log(foo); // Node: [String: 'foo'] | Brwoser: [String {'foo'}] | don't call in this way, instead implement toString() method.
console.log(typeof foo); // 'object'
console.log(foo instanceof String); // true
// console.log(foo instanceof 'string') => Uncaught TypeError: Right-hand side of 'instanceof' is not an object

foo = String("foo");
console.log(foo); // "foo"
console.log(typeof foo); // 'string'

foo = new Number(37); // constructor form of number
let fox = Number('45');
console.log(fox); // 45
console.log(foo); // Node: [Number: 37] |  Browser: [Number {37}] | don't call in this way, instead implement toNumber() method.

fox = new Boolean(true); // constructor form of boolean
console.log(fox); // don't call in this way, instead implement toBoolean() method.
console.log(typeof fox); // 'object' => since it is constructor form

var f = new Array(1,2,3); // don't use this type code. terrible idea
console.log(f); // [1, 2, 3]
console.log(typeof f); // 'object'
let new_array = []; // Best Practice
console.log(new Array(42)); // showing length of array, don't know why

var x = new Object(); // don't use such types, awful Idea
x._1 = 'One';
x._2 = 'Two';
console.log(x);

// do this instead
let xx = { 
    _1: 'One',
    _2: 'Two'
}
console.log(xx);

let regex = new RegExp('a*b', 'g');
console.log(regex); // it's dynamic type regex | Avoid
regex = /a*b/g;
console.log(regex); // it's static type regex [it's much prefer]

let date = new Date();
console.log(date);
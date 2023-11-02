// NaN => it's not actually 'not a number' rather invalid numerical operation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN

var greeting = 'Hello, class!';
let something = greeting / 2; // invalid operation
console.log(something); // NaN

let typeCheck = Number.isNaN(something);
console.log(typeCheck); // => true
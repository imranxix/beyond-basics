// 3 and 4 are operand and + is operator
console.log(3 + 4); // => 7
console.log(43 - 1); // => 42

console.log(`Kyle Simpson`); // => Kyle Simpson

console.log(!false); // => true
console.log(3.0 == 3); // => true (no coercion is happened)
console.log(3.0 === 3); // => true 

console.log( 3 < 4); // => true
console.log(true || false); // => true

console.log(true == 1); // => true (type coercion is happened, true is converted to 1 == 1)
console.log(true === 1); // => false (true is boolean and 1 is number, they're not same type)

console.log(false == 0); // => true (type coercion is happened, false is converted to 0 == 0)
console.log(false === 0); // => false (false is boolean and 0 is number, they're not same type)
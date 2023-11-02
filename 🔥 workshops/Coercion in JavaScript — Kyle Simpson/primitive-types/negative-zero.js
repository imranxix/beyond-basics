'use strict'
let foo = 0 / -3; // [No differences between 0 and -0, it's bug]
console.log(foo === -0); // true
console.log(foo === 0); // true
console.log(0 === -0); // true
console.log(0 / 3 === 0 / -3); // true
console.log(foo); // -0

foo = 0/3;
console.log(foo); // 0;
console.log();


let isNeg0 = (x) => {
    return x === 0 && (1 / x) === -Infinity; // (true && false)
}

console.log(isNeg0(0 / 3)); // false
console.log(isNeg0(0 / - 3)); // true
console.log(1/0); // Infinity
console.log(1/-0); // -Infinity
console.log(0/1); // 0
console.log(-0/1); // -0

// ES6 feature, which same as like === and good thing is that it doesn't tell lie about NaN and -O
console.log();

// best practice for use Object.is for NaN and -0
console.log(Object.is('foo', NaN)); // false
console.log(Object.is(123, NaN)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is("a"/ 2, NaN)); // true
console.log(Object.is(0, -0)); // false
console.log(Object.is(4.0, 4)); // true
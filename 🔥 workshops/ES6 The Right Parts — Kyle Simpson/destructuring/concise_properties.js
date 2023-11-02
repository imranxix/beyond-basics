let a = 1;

let obj = {
    // a : a, => old way
    a, // concise and new way [when property and value has same name]
    b() {}, // new way
    // b = function b(){} [old version]
    c : 78,
    [a]: 458 // when I wanna use variable's value as a property
}
console.log(obj) // => { '1': 458, a: 1, b: [Function: b], c: 78 }
// if a variable is never been declared that state is called undeclared.
// if a variable is declared but not any value is assigned to it that state is called undefined.

let name = null;
console.log(typeof(name)); // object
let name2 = undefined;
console.log(typeof(name2)); // undefined
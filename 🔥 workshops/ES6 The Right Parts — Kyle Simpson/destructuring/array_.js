// old way

let foo = () => [1,2,3]
var temp = foo()
var a = temp[0]
var b = temp[1]
var c = temp[2]

console.log(a, b, c)

// new way
let foo2 = () => [1,2,3]
[a, b, c] = foo2()
console.log(a, b, c) // => 1 2 3

let foo3 = () => [1, 2, 3, 4]
[a, b, c] = foo3()
console.log(a, b, c) // => 1 2 3

let foo4 = () => [1,2]
let [x, y, z] = foo4()
console.log(z, y, x) // => undefined 2 1

// default value
let array = () => [1, , 3]
[x, y=45, z] = array()
console.log(z, y, x) // => 3 45 1

let array2 = () => [1, , 3, 4, 5, 6]
let [m, n=45, o, ...args] = array2()
console.log(o, n, m, args) // => 3 45 1 [4, 5, 6]

// swapping values
{
  let k = 10, l = 20;
  [k, l] = [l, k];
  console.log(k, l) // => 20 10
}

array2 = [1, 2, 3];
[, , ...array2] = [0,...array2, 4];
console.log(array2) // [2, 3, 4]
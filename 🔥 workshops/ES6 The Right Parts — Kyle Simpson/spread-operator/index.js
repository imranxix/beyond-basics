// ... is called rest/gather operator and spread operator depends on context, where we are using it...
// when ... operator in assignment context it gathers.
// when it is not used in an assignment context, but rather in a list context, it spreads

let bar = (x, ...args) => { // gather
  return [x, ...args] //spread
}
let foo = (...args) => { // gather
  console.log(bar(...args)) // spread [4,5,6]
  return [42, ...args, 8]
}

console.log(foo(4,5,6)) // => [42, 4, 5, 6, 8]

// concat 2 arrays
let x = [1, 2, 3]
let y = [4, 5]
let z = [0].concat(x, y, 6) // old way
console.log(x) // => [0, 1, 2, 3, 4, 5, 6]

z = [0, ...x, ...y, 6]
console.log(z) // => [0, 1, 2, 3, 4, 5, 6]

let a = [1,2,3]
let b = [4,5]

let foo2 = (x, y, ...args) => {
	return args
}
console.log(foo2(...a, ...b)) // => [3,4,5]

a = [1]
b = [2, 4, 5]
console.log(foo2(...a, ...b)) // => [4,5]

// split str
let str = 'Hello'
console.log([...str]) // => [ 'H', 'e', 'l', 'l', 'o' ]
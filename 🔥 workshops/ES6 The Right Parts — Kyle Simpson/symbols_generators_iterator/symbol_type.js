// Symbol is a unique globally unguessable value withing the context of your program

let x = Symbol('Whatever you type')
let y = Symbol('Whatever you type')
console.log(x === y) // => false

let obj = {
    id: 42,
    [x] : 489
}

console.log(x)
console.log(obj)

console.log(Object.keys(obj)) // => ['id']
console.log(Object.getOwnPropertySymbols(obj)) // Symbol('Whatever you type')
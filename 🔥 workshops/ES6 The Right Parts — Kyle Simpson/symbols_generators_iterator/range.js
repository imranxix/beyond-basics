// Make custom range
Number.prototype[Symbol.iterator] = function*(){
    for(let i = 0; i < this; i++){
        yield i
    }
}

let range_number = 8
console.log([...range_number]) // => [0..7]
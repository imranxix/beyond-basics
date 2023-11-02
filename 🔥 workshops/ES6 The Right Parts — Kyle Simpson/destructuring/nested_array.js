function foo() {
    return [1, 2, 3, [4, 5, 6]]
}

let [a, b, c, ...args] = foo()
console.log(args) // [ [ 4, 5, 6] ]

let d, e, f;
[a, b, c, [d,e,f]] = foo();
console.log(d, e, f); // 4 5 6

let x = [a, b] = foo();
console.log(x); // whole array

[, , , [c, d]] = [a, b, ...args] = foo();
console.log(c, d) // => 4 5
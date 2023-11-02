function foo(){
    return {
        a: 1,
        b: 2, // when b is not present default value will be used
        c: 3
    };
}

// object destructuring is same as array destructuring
// let {a, b, c} = foo(); [since key:value is same]

// reassigned all variables as x y z
let {a:x, b:y = 25, c:z} = foo() || {}; // {} is for when falsy value return then foo turn into {}
console.log(x, y, z); // => 1 2 3
// console.log(b); => Error
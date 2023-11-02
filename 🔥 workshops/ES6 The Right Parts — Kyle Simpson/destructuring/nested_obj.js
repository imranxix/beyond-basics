function foo(){
    return {
        a: 1,
        b: 2,
        c: 3,
        d: {
            e: 4
        }
    };
}

var {a, b, c, d:{e} = {}} = foo()
console.log(e) // => 4
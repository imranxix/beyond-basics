// it is possible to pass array or object destructuring as a parameter

function foo([a, b, c] = []){
    console.log(a, b, c)
}

foo([1,2,3]) // => 1 2 3

function foo2({a, b,c}={}){
    console.log(a, b, c);
}

foo2({  
    b:2,
    a:1,
    c:3,
}) // => 1 2 3
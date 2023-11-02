function *main(){
    console.log('hello')
}

let it = main()
it.next()
console.log(it.next()) // => {value: undefined, done: true}

function *Generator(){
    for(let i = 0; i < 5; i++){
        yield i;
    }
}

console.log(Generator()) // => weird stuff
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// https://javascript.info/arrow-functions


// imperative means telling the computer how to do something...
// delcarative means telling the computer what the end result should be...

// arrow function is an anonymous function, syntacally(rules of syntax) anonymous. It is function expression.
// arrow function is bad for self referencing(recursion)

// function with no parameter
let x = () => 25 // this is called implies return 25
x = _ => 2 // _(underscore) as a placholder is a bad practice, don't do that

// function with parameters
x = (a, b) => a+b

// when we want to implies return something(expression) from arrow function, we don't need to put {} after this =>... but for expression it is require

let xx = () => {
	return 3; // it won't work without return
}

let catchError = () => {
	try{
		3
	} catch(e){

	}
}

// return object from arrow
let returnObject = () => ({
	'name': 'Imran'
})

let returnValue = () => 3;
console.log(returnValue.name) // 'returnValue' [naming infrencing, look at spec]

// arrow function is mostly useful for pass as a argument for higher order function

foo(x => x) // calling function

// promise with arrow function
p.then(function (v) {
	return v.id
})

p.then((v) => v.id)

// one specfic examples where arrow function shining
var obj = {
	id: 42,
	foo: function foo(){
		setTimeout(function (){
			console.log(this.id) // => 42
		}.bind(this), 100) // without bind(this) it will return undefined
	}
}

console.log(obj.foo())

/*
arrow function doesn't have this keyword in it. It can't be bound with this keywod. If you want to reference this keyword inside of an arrow function 
it will automatically lexically go up one level two of scope and use that this keyword surrounding scope...
*/
var obj2 = {
	id: 42,
	foo: function foo(){
		setTimeout(() => {
			console.log(this.id) // => 42
		},100)
	}
}

console.log(obj2.foo())
// use var in the places where u intened to use them accross lots of scopes.
// use let in the places where u were already stylistically saying, I wanna contain it to this block...

for(var i = 0; i < 10; i++){
	console.log(i)
}

// i is hoisted and out of block scope
console.log(i) // => 10

function foo(x, y){
	if (x > y){
		var temp = x
		x = y
		y = temp
	}
	// temp is hoisted as function level variable not block level
	console.log(temp) // => x
}

var x = 10
var y = 5
foo(x, y)
console.log(x, y) // => 10 5

// constant variable
/*
const is a variable that can be reassigned and nothing to do with the value...
const value that doesn't change, it's wrong idea

kyle's advice for let, var and const =>
var, use let where that's helpful
every once in a while maybe use const
*/

const x = [1,2,3] // even with var same task will be accomplished
x[0] = 55
console.log(x) // => [55,2,,3]

// if u want to make x immutable use Object.freeze()
var y = Object.freeze([1,2,3])
y[0] = 5555
console.log(y) // => [1,2,,3]
/*
* function expression (it doesn't have any name and it assigned to a variable)
* function expression is a function that is assigned a value somewhere.
* kyle recommended 'named function' because it's readable & obvious.
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* http://benalman.com/news/2010/11/immediately-invoked-function-expression/
*/

// anonymous function expression
let clickHandler = function(){
    console.log(`Hello, Dhaka`);
}

// named function expression
let keyHandler = function keyHandler(){

}

// named function
function key(str){
    console.log(`Hello, ${str}! Que tenga un buen diya`);
}

clickHandler();
key('Guys');

// Immediately invoked function IFFEs
(function sum(){
    console.log(105+20); // => 125
})();
/*
1) Primitive types
    1) undefined
    2) string
    3) number
    4) boolean
    5) symbol
    6) bigint
    7) null
    8) object
2) Converting types
3) Checking Equality

[function typeof] return function.
In javascript, variables don't have types, values have.

In JavaScript, everything is an object => 100% False (getify).
function & array are sub type of object.
*/

let variable_un;
console.log(typeof variable_un); // => "undefined"

let variable_str = '1' ;
console.log(typeof variable_str); // => "string"

let variable_num = 2;
console.log(typeof variable_num); // => "number"

let variable_obj = {};
console.log(typeof variable_obj); // => "object"

let variable_arr = []; // why it's not array type cause historical bug
console.log(typeof variable_arr); // => "object"

let variable_null = null;
console.log(typeof null); // => "object" [BUG since js was created]

let variable_sym = Symbol();
console.log(typeof variable_sym); // => "symbol"

let var_fn = function(){
    
};
// fn is a sub type of object, but it has an unique return value function
console.log(typeof var_fn); // => "function"
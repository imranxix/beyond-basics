/*
* == checks value ❌
* == (allows coercion) ✔
* === checks value and type ❌
* === (disallows coercion) ✔
*/

var foo = []
var baz = ""

if (foo == baz){ // "" == "" | String([]) returns ""
    console.log('Doh!!') // true so output is 'Doh'
}

if (foo === baz){
    console.log('Phew') // not return anything because it's false
}

foo = 0
if (foo == ""){
    console.log('Argh') // true so output is 'Argh'
}

if (foo === "") {
    console.log('Phew') // not return anything because it's false
}

// undefined == null ====== true, they are same each other
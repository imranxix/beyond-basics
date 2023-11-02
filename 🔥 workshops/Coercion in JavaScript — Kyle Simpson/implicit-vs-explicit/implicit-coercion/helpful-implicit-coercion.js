/*
Notes =>
performance "=== is faster than =="
use === where it's safer and use == where it's more helpful
use explicit coercion where it's safer and use implicit where it's more helpful
*/

// u won't get help from coercion
var foo = '3'
if (foo == 3 || foo == '3'){
    alert('Thanks.. but')
}

// better line 
if (foo == 3){
    alert('yeah')
}

var x;
if (x == null) {
    alert("Thanks")
}

x = null;
if (x == null) {
    alert("Thanks, again!")
}

x = false;
if (x == null) {
    alert("Phew!")
}
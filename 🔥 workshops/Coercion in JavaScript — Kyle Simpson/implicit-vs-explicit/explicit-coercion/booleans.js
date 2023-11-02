var foo = '123';
var baz = Boolean(foo); 
console.log(baz); // true 

baz = !!foo; // coerces to Boolean, invoke ToBoolean abstract method
console.log(baz); // true

// never ever do that
baz = foo ? true : false;
console.log(baz); // true

var now = new Date();
console.log(now + ""); // => 'String representation of Date' | Date uses toString -> valueOf as fallback


// ~N => -(N+1) | ~ hides a leaky abstraction of -1 in.indexOf()
if (~'foo'.indexOf('f')){ // since f's index is 0 and 0 is falsy so, we converted it to truthy
    console.log('Found at position 0');
}
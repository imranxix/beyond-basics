// Many are comes from Historical Java/C++, that's why start with capital letter.
// use new when we want to represent something in object and skip new when we want to type conversion.

// built in fundamental objects
// these for object representation
new Object()
new Array()
new Error()
new Date()
new RegExp()
new Function()

// Don't use new keyword in front of these
// these for type coercion/conversion
String()
Boolean()
Number()

console.log(String(5)); // => '5'
console.log(Number('55')); // => 55
console.log(Boolean('true')); // => true
console.log(Boolean('1')); // => true

yesterday = new Date("June 5, 2023");
console.log(yesterday.toString());
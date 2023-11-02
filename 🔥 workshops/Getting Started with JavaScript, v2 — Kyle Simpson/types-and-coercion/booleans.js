// Falsy Value
console.log(Boolean(0)); // => false
console.log(Boolean(-0)); // => false
console.log(Boolean('')); // => false
console.log(Boolean()); // => false
console.log(!!null); // => false [same as Boolean]
console.log(!!undefined); // => false
console.log(!!false); // => false
console.log(!!NaN); // => false

console.log();

function y() {

}

// Truthy Value
console.log(Boolean(function x(){})); // => true
console.log(!!y); // => true
console.log(Boolean('foo')); // => true
console.log(Boolean(2)); // => true
console.log(Boolean({})); // => true
console.log(Boolean([])); // => true
console.log(!!Symbol()); // => true
console.log(!!-5); // => true

let studentsInputEle = {
    value: '10',
};

let newStudents = [];

// old way
if (studentsInputEle.value){ 
    let numStudents = Number(studentsInputEle.value);
}

// boolean conversion automatically happens here
while (newStudents.length){
    enrollStudents(newStudents.pop());
}

// best practice
if (!!studentsInputEle.value){ // explicitly conversion
    let numStudents = Number(studentsInputEle.value);
}

while (newStudents.length > 0){
    enrollStudents(newStudents.pop());
}
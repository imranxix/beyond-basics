// The way to convert from one type to another type is called coercion.

let msg1 = 'There are';
let numStudents = 16;
let msg2 = 'Students.';

// explicit number conversion to string
console.log(`${msg1} ${String(numStudents)} ${msg2}`);
// implicit number coercion to string | {+''} means idomatic way of converting string, hence we know that number + string === string
console.log(`${msg1} ${(numStudents + '')} ${msg2}`); 

/*
Number + Number = Number
String + Number = String
Number + String = String
String + String = String
*/

addStudents = function(numOfStudents){
    console.log(numOfStudents + 1);
}

let number_of_students = 16;
addStudents(number_of_students);

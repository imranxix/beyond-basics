/**
* for loop => Execute a block of code certain number of times.
* while loop => Execute a block of code certain number of times based on condition.
* do -- while loop => Execute code at least one time before checking the condition.
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
*/

let students = ['Janny', 'Brad', 'Walter'];
for (let student of students){
    console.log(student);
}
console.log(); // new line

// old way
for (let student = 0; student < students.length; student++){
    console.log(students[student]);
}
console.log(); // new line

// While loop
while (students.length > 0){
    let student = students.pop(); // last element will be popped out
    console.log(students.length);
    console.log(student);
}
console.log(students); // => []

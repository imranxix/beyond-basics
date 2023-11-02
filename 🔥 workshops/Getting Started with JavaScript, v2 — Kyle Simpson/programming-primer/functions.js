// function is a collection of things or statement. [block of code]
// inside (``) any string is called interpolated string.

// expression
let greetStudents = function(student){
    for (let student_ of student){
        console.log(`Hello, ${student_}`);
    }
}
greetStudents(['Sarah', 'John', 'Smith']);

// Pure function
function timeRemaining (timeElapsed, endTime = 0){
    return endTime - timeElapsed;
}

let leftTime = timeRemaining(timeElapsed=42, endTime = 442);
console.log(leftTime);
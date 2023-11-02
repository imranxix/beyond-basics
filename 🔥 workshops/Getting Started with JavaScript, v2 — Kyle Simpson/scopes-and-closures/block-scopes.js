// use let/const inside of block scope and var inside of function scope.

var teacher = 'Kyle';

function Name(){
    let teacher = 'Suzy'; // although they share the same name but their scope is different.
    console.log(teacher); // => Suzy
}

Name(); 
console.log(teacher); // Kyle

// Swapping values
let x = 10;
let y = 20;

let swapping = function() {
    let temp = x;
    x = y;
    y = temp;
    console.log(x, y);
};

swapping(); // 20 10
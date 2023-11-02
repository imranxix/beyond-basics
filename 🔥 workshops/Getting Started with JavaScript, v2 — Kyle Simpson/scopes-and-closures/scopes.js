// Scope: where the js enginees looks for things

var teacher = 'Kyle';
// var topic;

// if i declare a variable without decoration inside a function, it will hoisted to outer scope.
function otherTeachers(){
    // since there is no decoration (let/const/var) for variable, so it will point out to outer scope 'teacher' variable.
    teacher = 'Suzy';

    // it is created implicit outer 'topic' variable, that's why it is accessible from outer and inner scope.
    // hence, it is not declared anywhere so it will hoisted in outer scope.
    // create new variable in outer scope so that it can reference.
    topic = 'Vue.js';
}

// console.log(topic); // ReferenceError: topic is not defined
otherTeachers();
console.log(teacher); // Suzy
console.log(topic); // Vue.js 
console.log(teacher); // suzy
// ES6 class
class Workshop {
    constructor(teacher) {
        this.teacher = teacher;
    }
    ask(question) {
        console.log(this.teacher, question); 
    }
}

var deepJs = new Workshop('Kyle');
var vueJs = new Workshop('Suzy');

deepJs.ask(`Is 'class' a class`); // Kyle Is 'class' a class
vueJs.ask(`Isn't 'class' ugly?`); // Suzy Isn't 'class' ugly?
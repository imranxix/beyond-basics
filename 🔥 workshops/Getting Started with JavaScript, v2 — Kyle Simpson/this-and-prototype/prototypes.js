// Prototype means that it is an object where any instances are going to be linked or delegate to

function Workshop(teacher){
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question){
    console.log(this.teacher, question);
}

var deepJs = new Workshop('Kyle');
var vueJs = new Workshop('Suzy');

deepJs.ask(`Is 'Prototype' a class`);
vueJs.ask(`Isn't 'prototype' ugly?`);
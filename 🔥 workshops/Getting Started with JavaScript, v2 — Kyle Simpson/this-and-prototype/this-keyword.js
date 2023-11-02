/*
'this' keyword references what we would call an 'execution context' for when the function is called (It references when the function is called and doesn't care where the function is defined)

A this-aware function can thus have a different context each time it's called
which makes it more flexible and reusable (each time its context would
be different)

there has 4 rules how this keyword determine
1) Object or Implicit Rule
2) Global Context Rule
3) Explicit Rule (call, bind and apply)
4) new Rule (new keyword in JavaScript)

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
*/

let workshop = {
    teacher : 'Kyle', // property
    ask(question){ 
        console.log(this.teacher, question); // kyle what is implicit binding?
    },
};

workshop.ask(`What is implicit binding?`); // this care when it's invoked

function ask(question){
    console.log(this.teacher, question); // implicit binding
}

function otherClass(){
    let myContext = {
        teacher: 'Suzy',
    };
    // myContext reference this and teacher references context teacher
    ask.call(myContext, 'why?'); // suzy why?
}

otherClass();
/*
closure ==>
    closure is when a function "remembers" the variables outside of it, even if
    you pass that function elsewhere.
*/

// passing function as a argument, callback function
function ask(question){
    setTimeout(function waitASec(){
        console.log(question);
    }, 100);
}

ask(`What is closure?`);

// 2nd
function ask_(ques){
    return function hold(){
        console.log(ques);
    };
}

ask_('what is closure?')();
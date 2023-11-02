// function expression
let goVote = function(){
    console.log('You can go for Vote, Choose the right Candidate.');
}

let age = 20;
if (age >= 18){
    goVote();
} else {
    console.log('Sorry, You\'re not good enough for Vote, Try next year.');
}
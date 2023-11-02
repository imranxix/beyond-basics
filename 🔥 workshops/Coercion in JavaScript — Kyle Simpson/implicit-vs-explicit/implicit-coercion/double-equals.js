var foo = '123'
// "123" converts into 123 and true converts into 1 then 1 == 123
if (foo == true){
    console.log('WAT!!')
}  

foo = []
if (foo){
    console.log('Sure!!')
}

// if foo == false then it convert like this [] => "" => 0 [0 == 0]
if (foo == false){
    console.log('WAIT!!')
}

// strongly recommend using explicit boolean for comparison true and false
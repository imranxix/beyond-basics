// template tg functions

function foo(strings, ...values){
    // return 'I am evil'
    var str = ''

    for(let i = 0; i < strings.length; i++){
        if (i > 0) str += values[i-1]
        str += strings[i]
    }
    return str
}

var name = 'Kyle'
var orderNumber = '123'
var total = 319.7

msg = foo`Hello, ${name}, your \
order #${orderNumber} was $${total}`

console.log(msg) // Hello, Kyle, your order #123 was $319.7
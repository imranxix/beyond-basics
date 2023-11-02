var name = 'Kyle'
var orderNumber = '123'
var total = 319.7

// \ is called line continuation
var msg = 'Hello, ' + name + ', your \
order ' + '#' + orderNumber + ' was ' +
'$'+total;

// es6 template string (by default multiline string)
msg = `Hello, ${name}, your \
order #${orderNumber} was $${total}`

console.log(msg) // Hello, Kyle, your order #123 was $319.7
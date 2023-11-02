// variable is a place of memory in a machine where we can store a value.

var name = 'Kyle';

var age; // undefined because of hoisting 
age = 39; // value is initialized

var friends = ['Brandon', 'Martin'];
console.log(friends[1][0]); // => 'M' (this M is from Martin's M)
console.log(friends.length); // => 2
console.log('a' * 3); // => NaN (never possible)
console.log('a'.repeat(3)); // => 'aaa'

age = 48;
console.log(age + age++); // => 96

let friend = ["Brandon"];
console.log(friend[0].slice(2,4)); // 'an'
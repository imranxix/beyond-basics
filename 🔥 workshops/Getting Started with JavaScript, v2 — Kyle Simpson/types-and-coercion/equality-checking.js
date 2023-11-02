/*
== check value (loose)
=== check value and type {{ Not true actually }}

== [allow coercion] (types are different)
=== [disallow coercion] (types should be same)

== is not about comparisons with unknown type
== is about comparisons with known type(s).
*/

let studentName1 = 'Frank';
let studentName2 = `${studentName1}`;

let workShopEnrollment1 = 16;
let workShopEnrollment2 = workShopEnrollment1 + 0;

console.log(studentName1 == studentName2); // => true
console.log(studentName1 === studentName2); // => true

console.log(workShopEnrollment1 == workShopEnrollment2); // => true
console.log(workShopEnrollment1 === workShopEnrollment2); // => true

console.log(null == undefined); // => true [undefined becomes null]
console.log(null === undefined); // => false

let workshop1 = {
    topic: null,
};

// we should make types obvious when compare values (best practice)

let workshop2 = {};

// kinda ugly
let statement1 = (workshop1.topic === null) || (workshop1.topic === undefined);
let statement2 = (workshop2.topic === null) || (workshop2.topic === undefined);

if (statement1 && statement2) {
    // ....
}

// when we know null == undefined (true), so we can use == for readability
if ((workshop1.topic == null) && (workshop2.topic)) {
    // ...
}
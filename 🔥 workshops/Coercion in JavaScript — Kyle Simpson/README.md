### Reading Materials

* https://davidwalsh.name/fixing-coercion
* http://getify.github.io/coercions-grid
* https://github.com/rwaldron/idiomatic.js/
* http://jscoercion.qfox.nl/
* http://webreflection.blogspot.com/2010/10/javascript-coercion-demystified.html

Explicit coercion \ Implicit coercion  
Use only one form of coercion ( Number vs + operator )

* Abstract operations:  
  * ToString  
  * ToNumber  
  * ToBoolean  
  * ToPrimitive ( when converting objects; uses valueOf > toString )  

### toString()

* https://blog.devgenius.io/coercion-in-javascript-47ba133d7ce9
* https://exploringjs.com/deep-js/ch_type-coercion.html
* https://exploringjs.com/impatient-js/ch_strings.html#converting-to-string

```js
String( [] )                  ""
String( [1,2,3] )             "1,2,3"
String( [null, undefined] )   ","
String( [ [], [], [] ] )      ",,"
String( [,,,,] )              ",,," 
// trailing comma is allowed in array

String({})                   "[object Object]"
String({a: 2})               "[object Object]"
```

function signification is a browser implementation-dependent

### toNumber()

```js
Number( "" )                 0       
Number( '0' )                0
Number( '-0' )               -0
Number( '   009  ' )         9
Number( '3.14159' )          3.14159
Number( '0.' )               0
Number( '.0' )               0
Number( '.' )                NaN
Number( '0xaf' )             0

Number( true )               1
Number( false )              0
Number( null )               0
Number( undefined )          NaN
```

> Number(object(array, object, function)) ⇆ ToPrimitive() ⇆ valueOf(should return primitive value) ⇆ .toString() ( if valueOf doesn't return a primitive value, just ignored it )

```js
Number( [""] )               0 // .toValue returns [''] so fallback to toString used which returns '', Number('') === 0
Number( ['0'] )              0
Number( ['-0'] )             -0
Number( [null] )             0
Number( [undefined] )        0
Number( [1, 2, 3] )          NaN
Number( [[[[[[]]]]]] )       0
```

### toBoolean()

```js
Falsy values
    ""
    0, +0, -0
    false
    null
    undefined
    NaN
Truthy values
    "str"
    23
    {a: 1}/{}
    [1,3]/[]
    true
    function(){}
```

### Implicit coercion (evil)

```js
    "123" - 0      // 123 | Number(123) - 0
    "123" - ""     // 123 | Number(123) - Number("") => 123 - 0
    "123" - "0"    // 123 | 123

if ( "" == false )  // empty string converted to 0, false converted to 0
if ( "123" == false )   // 123 == 1 > 0
if ( [] == false )   // '' == 0 > 0 == 0

Never use 
    == true
    == false

[] == ![]
    "" == false
        0 == 0

==   allows coercion, slower
===  disallows coercion, faster
```

> <, > always uses coercion, no strict form 

### The Bad Parts

* https://johnkpaul.github.io/presentations/empirejs/javascript-bad-parts/#/
* https://www.reddit.com/r/javascript/comments/jazc3c/askjs_javascript_what_are_nowadays_bad_parts/
* https://www.freecodecamp.org/news/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81/

```js
'0' == null // false
'0' == undefined // false
'0' == false // true -- WTF
'0' == NaN // false
'0' == 0 // true
'0' == 0 // false

false == null // false
false == undefined // false
false == NaN // false
false == 0 // true --
false == '' // true --
false == [] // true --
false == {} // false

'' == null // false
'' == undefined // false
'' == NaN // false
'' == 0 //true --- WTF
'' == [] // true --
'' == {} // false

0 == null //false
0 == undefined // false
0 == NaN // false
0 == [] // true --
0 == {} // false
[] == ![] // true | line 130, [] is truthy so true == false
```

### A quick list of things to avoid when writing JavaScript code

* Avoid creating a new object by using `new Object()`. Use the object literal syntax `{}` instead.
* Same thing for arrays, favor `[]` over `new Array()`.
* Avoid blocks except where statements require them (if, switch, loops, try).
* Never assign inside an `if` of `while` statements condition part
* Never use `==` and `!=`. Use `===` and `!==` instead.
* Never use `eval`. Why? It has performance issues (it runs the interpreter/compiler), it has security issues (code injection if used with user input), difficulties in debugging.
* Never use `with`, as it modifies the scope chain and can be a source of confusion.
* Always pass functions to `setTimeout` and `setInterval`
* Never use `Array` as an associative arrays, use Object instead. The part of the Array object that provides that functionality is in fact provided by the Object prototype, so you could really have used a Date object for that same thing.
* Don’t use `\` at the end of a string to create a multiline string, it’s not part of ECMAScript. Use string concatenation `"string1" + " string2 "` instead
* Never modify the prototypes of the built-in objects Object and Array. Modify other prototypes of other objects such as Function with caution as it could lead to bugs hard to debug.

> NEVER USE == true OR == false !

### Save Parts

* [dwyl/Javascript-the-Good-Parts-notes](https://github.com/dwyl/Javascript-the-Good-Parts-notes)

```js
42 == '43' // false
'foo' == 42 // false
'true' == true //false

42 == '42' // true ("42" converts into 42 and then 42==42)
'foo' == ['foo'] // true | String(["foo"]) == "foo" then "foo" == "foo"
```
### Others

```js 
String('abc') instanceof String // false
(new String('abc')) instanceof String // true
String('abc') == (new String('abc')) // true -- WTF

3 > 2 > 1  // false -- WTF => what is happening here is 3 > 2(true) then 2 > 1(true) and 1 > 1 (false)


* parseInt() looking string parameter. If we put non-string we should expect weird 
* behaviour (coercion). if get non-str input then it is 
* first coerce to str then parse into number

// let's pretend 19 is a number base. 0-9a-j, Infinity(I) is in the 19 base
console.log(parseInt(1/0, 19)) // 18 [1/0 == Infinity]
console.log(parseInt('08')) // 8 ('08', 10) [under the hood]
console.log(parseInt('07', 20)) // 7
```
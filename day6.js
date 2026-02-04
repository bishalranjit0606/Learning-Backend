/**
 * DAY 6: Variables (var vs. let vs. const)
 */

// 1. BLOCK SCOPE
{
    var x = 10;    // var ignores blocks (curly braces)
    let y = 20;    // let stays inside the block
    const z = 30;  // const stays inside the block
}

console.log(x); // Works! Prints 10.
// console.log(y); // Error! y is not defined here.
// console.log(z); // Error! z is not defined here.


// 2. FUNCTION SCOPE
function testScope() {
    var a = 100;
    console.log(a); // Works inside the function
}
testScope();
// console.log(a); // Error! Even 'var' is trapped inside a function.


// 3. HOISTING
// With 'var', the declaration moves to the top, but the value stays.
console.log(b); // Prints 'undefined' (it knows 'b' exists, but not the value)
var b = 33;

// If you used 'let' or 'const' here, it would throw a "ReferenceError".

//string in js
//it is the sequence of character

let name = "bishal"
let city = "kathmandu"

console.log(name, city)

console.log(typeof name)

//here b index is 0 i is 1 , and so on

//bishal = 0,1,2,3,4,5

console.log(name[0])
//gives result b

//string is immutable


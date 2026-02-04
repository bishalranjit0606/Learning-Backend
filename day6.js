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
name[4] = "y"
console.log(name) //it will give the same bishal

//string is immutable therefore it gives protection like password not changed
//no confusion on data 
//and saves few storage

//few methods of strings

//finding the length of the string 
console.log(name.length)

//combining the two strings
let first_name = "bishal"
let last_name = "ranjitkar"
let full_name = first_name.concat(last_name)

console.log(full_name)
//or use 
console.log(last_name + first_name)

//convert into uppercase

console.log(full_name.toUpperCase())

//to lower case

console.log(last_name.toLowerCase())

//another method to find the index
console.log(name.charAt(4))

//imp concept slicing
console.log(full_name)

console.log(full_name.slice(2)) //shalranjitkar
console.log(full_name.slice(2, 5)) //shal
console.log(full_name.slice(-5)) //itkar
console.log(full_name.slice(-5, -2)) //itk

//indexof method

console.log(full_name.indexOf("a"))

//if the char is not present

console.log(full_name.indexOf("z"))// gives -1

//trim

let word = " test "
console.log(word.trim())//trim the extra space

//split
//break into character of string

console.log(full_name.split(""))/*[
  'b', 'i', 's', 'h',
  'a', 'l', 'r', 'a',
  'n', 'j', 'i', 't',
  'k', 'a', 'r'
] */





// --- DATA TYPES ---

// Primitive: Simple, immutable values
var numberExample = 10;           // Number: integers or decimals
var stringExample = "Hello";      // String: text data
var boolExample = true;           // Boolean: true or false
var undef;                        // Undefined: declared but no value assigned
var nullExample = null;           // Null: intentional emptiness
var symbolExample = Symbol("id"); // Symbol: unique identifiers
var bigIntExample = 9007199n;    // BigInt: for very large numbers

// Non-Primitive: Objects (representing real-world entities)
var person = {
    name: "Bishal",               // Property: key "name", value "Bishal"
    age: 23,                      // Property: key "age", value 23
    isStudent: true               // Property: key "isStudent", value true
};

console.log(person.name);         // Accessing value using dot notation

// --- OPERATORS ---

// Arithmetic
var num1 = 10;
var num2 = 3;
console.log(num1 + num2);         // Addition (13)
console.log(num1 % num2);         // Remainder/Modulus (1)
console.log(num1 ** num2);        // Power (1000)

// Increment/Decrement
var i = 5;
console.log(i++);                 // Post-increment: prints 5, then i becomes 6
console.log(++i);                 // Pre-increment: i becomes 7, then prints 7

// Equality
console.log(1 == "1");            // true: checks value only
console.log(1 === "1");           // false: checks value AND data type (Strict)

// Logical
console.log(true && false);       // false: AND (both must be true)
console.log(true || false);       // true: OR (at least one must be true)

// Bitwise (Binary manipulation)
// 10 is 1010, 6 is 0110
console.log(10 & 6);              // 2: AND operation on bits
console.log(10 | 6);              // 14: OR operation on bits

// --- CONDITIONALS ---

// If-Else
var num = 20;
if (num % 2 === 0) {
    console.log("Even");          // Runs if condition is true
} else {
    console.log("Odd");           // Runs if condition is false
}

// Ternary Operator (Shorthand if-else)
var result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);

// Nested Conditionals
var a = 10;
if (a >= 0) {
    if (a >= 5) {
        console.log("High Positive");
    } else {
        console.log("Low Positive");
    }
} else {
    console.log("Negative");
}

// Switch Statement
var fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("The color is Red");
        break;                    // break is required to stop falling through
    case "mango":
        console.log("The color is Yellow");
        break;
    default:
        console.log("Unknown fruit");
}

// --- LOOPS ---

// For Loop: Repeats code a specific number of times
// 1. Initializer; 2. Condition; 3. Increment
for (var i = 0; i < 5; i++) {
    console.log("hello ");
}

//here var i = 0 is the intializer
//here i < 5 is the condition
//here i++ is the increment 


// //learning async js

// //synchronous js
// //first one step finished then next step start

// console.log("hello")
// console.log("bishal")
// console.log("ranjit")

// //another exmple. 
// //lets suppose bishal wait in the line of food for 10 hr without doing anything

// //asynchronous js
// //lets suppose bishal have tp wait for 10 min. so he goes to his friend house with ayush and cake owner call him when the food is ready
// //js is the master of doing this

// console.log("hello")

// function hello() {
//     console.log("hello2")
// }

// hello()

// console.log("hello3")


// //example of async

// console.log("testinggggg")

// setTimeout(() => {
//     console.log("time out vayoooo")
// }, 3000);

// console.log("testinggggg")

// // testinggggg
// // testinggggg
// // time out vayoooo

// //it happend dur to the event loop

// ////call stack
// //1sy coems global stck


// //calback fuxtion. function weher we pass functionas a argurment

// //wwebapis

// //evemt loop : it purpose is to keep an eye on the call back function and the timer that is clicking on
// //event queue: the execution gors to next line

// //closer
// // function hello() {

// //     let name = "bishal"
// //     console.log(name)
// // }
// // hello()

// // console.log(name)

// //gives error . name  cannot be used again

// // function outerfun() {
// //     let outervar = "outer"
// //     function innerfn() {
// //         console.log(outervar)
// //     }
// //     return innerfn
// // }

// // let fn = outerfun()
// // fn()

// // //mainly used in encapsulation


// function counter() {
//     let count = 0
//     return function () {
//         count++
//         console.log(count)
//     }

// }

// let counter1 = counter()

// counter1()
// counter1()
// counter1()

//call back 

//its a function.
//its function passed as a argument to another function

///it monstly used in async
//best example is settime out

function greet(name, callback) {
    const greeting = "hello" + name
    callback(greeting)
}

function display(message) {
    console.log(message)


}

greet("bishal", display)

//callback hell
//also called pyrabid of doom

//occur when we have multiple nested callback function
//its hard to fix.
//try to ognore it doing in the code









//function

//reuse the code 
//has the logic to solve the problem and can be used many time. that is call from anywhere

//function declare

function hello() {
    console.log("hello")
}

hello()

function name() {
    console.log("Bishal ranjitkar")
}

name()

function add(a, b) {
    return a + b
}
//console.log(add(10, 20))

//name of the nfunction should be logical
//here a and b are the parameter
//return is used to return the value from the function

//function is the keyword , name should ebe meaning ful, than coomd3es oaramter, than bidy than return than function call that is function call with arguments

//if we only put one value thant it give undefined.a

console.log(add(10)) //gives result Nan becauee 5 + undefined giuves undefiend

// but we can give defakut value 5

function sum(a, b = 5) {
    console.log(a + b)
}
sum(5, 6)// if argemnet isnnot pass than it gives delafult vakue for if the value is give than the valus eis chnaged

//making the function smaller
//so arrow functions

var test = () => console.log("hello world")
test()

//arrwor function with paramater

var test2 = (a, b) => console.log(a + b)
test2(5, 5)
    //eg for arrow function

    //the cons of arrow function is that we cannot put the arguments.
    //but we can put in latest arrow fnction. i have no idea

    //IIFE: when we create function . it exuture immedialty. 
    // iife = immediatley emnived function expression

    //example 

    (function () {
        console.log("testing function")

    })()//() this is what we call it immediately
//used only once

///this function is called annnomous function
//function that doesnot have name

//scope
//we have variable , function, objects. in what context define the scope
//three tyoes of scope
//global scope. applied every where
//function scope
//bloack scope
// function scope is and blocvk scope is alos called local scope

//global
var lname = "Ranjitkar"
console.log(lname)

function func() {
    console.log(lname)
}

func()


//function scope
function func2() {
    var num = 10
    console.log(num)
}

func2()
console.log(num)


//Block scope

{
    var x = 20
    console.log(x)
}
console.log(x)







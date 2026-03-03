//learning express

//express is a framework.
//in real world ,ultiple people work in a project
//not everyone can collaborete
//so to make them all calloborate
//avoid boiler plate code. 
//we  need to reuce redundancy

//best eample of the frame work is momo maker.
//everyone will make the same size of momo and same design
//thery avoid boilerplate code

//learnning request response cycle
//client = person who open linkedin.com
// client does request
//server gets the request 
//server gives the response

//response can be of html/json/plain text

//handling the re, res cycle in the node js

//express has proper routing logic to handle the logic

//express is a minimal and flexible node.js web application framework that provides a robust set of features for web and mobile applications.


//express helps to faster server side of development
//have concept of mluggable middlewares. example adding addintional feature like pizza topping
//supoort routiing.
//clean code, better debugging support

//to use express
//npm init //creates package .json that has meta dtata of the prpject
//npm install express //add express in the package.json

const express = require("express")
console.log(typeof express) //its a function
//to use express we have to call it

const app = express() //app is the instance of the express
//app is very important for req , res cycle

//starting express server

app.listen(8000, () => {
    console.log("server is running on port 8000")
}) // adding callbackfunction 

//simple req res cycle

app.get("/", (req, res) => {
    res.send("hello world from express")
})

app.get("/about", (req, res) => {
    res.send("hello world from about")
})



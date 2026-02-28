//learning node js 

//npm = node package manager
//lets say if we need to make a tea we need chiya patti, sugar and milk so we buy it. which make us make the tea easily

// but we need to make every thing from scratch
//we try to raise a cow for milk, farm sugar cane for sugar. but it will take years to make it

// we use code of others to build on top of it.
//it's called library
//so lets suppose we need to read from a csv file. and apply business logic.
//csv file is a common problem and business logic is our problem.
//someone already created the 

//java has maven


//npm ensure we have dependencies


//npm is available by default

//if we install node npm is default

//usecase of npm

//create a node js project

//npm init
//helps to create a package.json file

//package.json will have all the information of the project 
//also has the meta data of the project

// as we have more lines of code we will keep adding in the package.json

//we can add more dependencies

//another use of npm is
//get the dependencies and external library

//npm help to connect remote repo
//all of these will happen very seamlessly

//we can find it in npm registry in browser

//its world largest library of code

//to get external modules

// when we install express it install all the dependencies of express

//package-lock.json
//it will store the exact version of the dependencies
//so that we can install the same version of the dependencies in another machine

//module : its a single or multiple js file
//has logic to solve any files
//once module is written we can use it in any project
//it could be reused from the project

//3 types of module
//1. selfmade module . made by us
//2. inbuild module . already in npm
//3.external module. downloaded from the internet

//creating own module
function add(a, b) {

    return a + b
}

function prod(a, b) {
    return a * b
}

module.exports = {
    add,
    prod
}


//this file will act as a module


//learnig about objects

//in 2000 the ineternet came in  action
//the web page was static but now its dynamic

//every company of the world is trying to solve the real world problem

//there are always two problems
//always has attributes
//like car has color, size etc
//person has name, age, height etc
//and there are relationships. 
//so these are the problems of objects

//defining an object

const user = {
    name: 'bishal', //object has key, value pair
    age: 25,
    height: 5.5,
    isStudent: true,
    address: {
        city: "katyhmandu",
        ward: 14
    }
}

//access the object 

console.log(user)
console.log(user.name)
console.log(user.address)
console.log(user.address.city)
console.log(user.address.ward)

//adding in the data
user.email = "bishal@gmail.com"
user.address.houseNo = 123
console.log(user)

//delete the data from object
delete user.age
console.log(user)

//printing only key
let person = {
    name: "bibek",
    Pasal: "newroad",
    age: 24,
    address: {
        city: "katyhmandu",
        ward: 14
    }


}

console.log("///////////")

//use for loop
for (let key in person) {
    console.log(key)
} // Gives only the top-level keys: name, Pasal, age, address. It doesn't automatically go deep into nested objects.

console.log("///////////")

//for getting the key inside the address
for (let key in person) {
    console.log(person[key])
}
console.log("///////////")
console.log("///////////")
console.log(Object.entries(person))

// 1. Shallow cloning using the Spread operator (...)
let person2 = { ...person };
console.log("Person 2 (Spread):", person2);

// 2. Cloning using Object.assign
let person3 = Object.assign({}, person);
console.log("Person 3 (Object.assign):", person3);

// Note: Modifying a property (role) adds it to the original object
person.role = "developer"
console.log("Original Person with new role:", person)

// Deep cloning (for nested objects)
let person4 = JSON.parse(JSON.stringify(person));
person4.address.city = "Pokhara";
console.log("Person 4 (Deep Clone - city changed):", person4.address.city);
console.log("Original Person (City remains same):", person.address.city);

//structuring in array

const nums = [1, 2, 3]
const [a, b, c] = nums

console.log(a)
console.log(b)
console.log(c)

//if only put a and b but try to put conosle.log c that it will give error

const [p, q, r] = [1, 2, [3, 4, 5]]
console.log(r)

//destructuring an array

const per = {
    name: "ayush",
    age: 22,
    city: {
        name: "ktm",
        ward: 14
    }
}

const { city: { name: city }, name } = per
console.log(city)
console.log(name)



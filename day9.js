//higher oder function
//1st learn 1st order function

//it is a kind of function wheere we eccept the paramater is primitive or object
//and the resturn is either primitive or object

///higher oder function is wheere we can send function as a pareamaster and result comes as a function

function operation(operator, a, b) {
    return operator(a, b)

}

//operation function is higher oder function

function add(a, b) {
    return a + b
}

let result = operation(add, 2, 3)
console.log(result)

//forEach method

players = ["bishal", "ram", "ayush"]

players.forEach(function (player) {
    console.log(player)
})

//map method
//for transfering the array to new array

arr = [1, 2, 3, 4, 5]

cube_arr = arr.map(num => num ** 3)

console.log(cube_arr)
//map doesnot change the the original array

//filter method

//reduce method
arr3 = [1, 2, 3, 4, 5, 6].reduce((acc, curr) => acc + curr, 0)
console.log(arr3)








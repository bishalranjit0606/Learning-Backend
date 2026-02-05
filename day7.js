//learning of array

//data str.
//help to store data in order

//js has more flexiable
//we can store array of different types

//eg we can store int, string, bollean

//its an obj that help to store the data

arr = [1, 2, 3]
console.log(arr)
console.log(typeof arr) //gives result object so the array is an object itself

console.log(arr[1]) //gives result 2

//arr = [1,2,3,4] //so index is 0,1,2,3


test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 25]
console.log(test[88])//gives reslut undefined


console.log(test[-1]) //gives undefied 
//so array indes is always postive 

//array is mutable

test[0] = 200
console.log(test)
//therefore array is muttable

//insert item into array


muttable = [5, 6, 7, 8, 9]

muttable.push(44) //add item at the end of the array
console.log(muttable)


muttable.push(66, 77, 88) //add multiple item in the array
console.log(muttable)

//to add in the start of the array

muttable.unshift(100) //add at the start of the array
console.log(muttable)

muttable.unshift(100, 999, 888) //add multiple at the start of the array
console.log(muttable)

//remove the item in the array

//pop method

console.log(muttable.pop())//rmeove the last item

console.log(muttable)

//remove the first item

console.log(muttable.shift())
console.log(muttable)

//add one array to another array

arr1 = [1, 2, 3]
arr2 = [4, 5, 6]

console.log(arr1.concat(arr2))

//finding the length of the array

console.log(arr1.length)

//convert the array into string

console.log(arr1.toString())
console.log(arr1.join())//gives 1,2,3
//if i dont want CompressionStream
console.log(arr1.join("")) //gives123

//slicing of the array

console.log(arr1.slice(1)) //gives [2,3]
console.log(arr1.slice(1, 2)) //gives [2]
console.log(arr1.slice(-1)) //gives [3]
console.log(arr1.slice(-1, -2)) //gives []
console.log(arr1.slice(2, -1)) //gives [3]

//spicing 
//change the array where slicing change the array

let number = [1, 2, 3, 4, 5, 6]
let removed = number.splice(1, 2) //here 1 is the index and 2 is the number of items to be removed
console.log(removed)
console.log(number)

//rever an array

let reverse = [1, 2, 3, 4, 5]
console.log(reverse.reverse())

//find index of any item
console.log(reverse.indexOf(3))
console.log(reverse.indexOf(33))//this return -1 beacuse its not there

///sorting an array

let unsort = [2, 5, 6, 3, 4, 1, 9, 8, 7]
console.log(unsort.sort())

//sorting an alphabetic order

let alpha = ["c", "a", "b"]
console.log(alpha.sort())

//sorting num + alphabetic order

let mixed = [1, 2, "c", "a", "b"]
console.log(mixed.sort())

//sorting words
let zig = ["zig", "test", "apple", "banana", "cherry", "date", "fig"]
console.log(zig.sort()) /*[
  'apple',  'banana',
  'cherry', 'date',
  'fig',    'test',
  'zig'
] */

let hello = [15, 40, 1, 13, 2]
console.log(hello.sort()) //gives [1,13,15,2,40] 
//to sort in ascending order
console.log(hello.sort((a, b) => a - b)) //gives [1,2,13,15,40]
//to sort in descending order
console.log(hello.sort((a, b) => b - a)) //gives [40,15,13,2,1]












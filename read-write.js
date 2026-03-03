// //reading fromthe external file

const fs = require("fs")

// console.log(typeof fs)

// //read in the sync way

// console.log("before reading")

// const content = fs.readFileSync("input.txt")
// console.log(content)// this give the byte buffer

// console.log(content.toString()) //now this gives in string

// console.log("after readddd")

// //reading a file in the async way

// console.log("before reading")

// fs.readFile("input.txt", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log("after reading")    

//writing in the file
// console.log("testing")
// fs.writeFileSync("output.txt", "hello bishak ranjitkar hahahah")
// console.log("testing")

//writing in tha async

console.log("before writing")

fs.writeFile('output2.txt', 'hello again', (err) => {
    if (err) {
        console.log(err)
    }
    console.log("file written successfully")
})

console.log("after writing")




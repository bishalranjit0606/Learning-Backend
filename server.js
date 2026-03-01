//learning http module

//server are the never stopping process.
//prople hit the server. 
//server gives the resukt to the clients.

//everytime we build an application we put it in the server
//everything runnig  to the system is process like crome, js file etc
//it is associated with the ports. 
//eg 8080

//client does request in the. server.
//server response.
//this is the client server model and request response cycle

//for making server we have a http module

const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url == "/hello") {
        res.end("hello world")
    }
    else {
        res.end("page not found")
    }

})

//for starting the server

server.listen(8000, () => {
    console.log("server is running on port 8000")
})
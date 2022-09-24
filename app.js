//Express is also used to create server. Express module is fast,minimalist web framework for Node.js

const express = require('express');

const server = express();
server.use(express.json()); // This just gives the body from the request


/*
// Middleware is used for Authentication for every operation.
server.use((req , res , next) => {
    console.log("I am Middleware function");
    next(); // Without this function, we cannot get any response in server side but the above statement gets executed.
})
*/


// const friend_List = require("./database.json");

const cricketers = [
    {
        name : "Virat Kohli",
        age : 33,
        type : "batsman"
    },
    {
        name : "Rohit Sharma",
        age : 35,
        type : "batsman"
    },
    {
        name : "Pat Cummins",
        age : 29,
        type : "bowler"
    }
]



server.get('/cricketers' , (req,res) => {
    res.status(201).send(cricketers);   // combining two lines into one
})


server.post('/cricketers' , (req,res) => {
    res.send("Data posted successfully!");
    cricketers.push(req.body);
})

server.delete('/cricketers' , (request , response) => {
    response.send("Data deleted successfully 👍");
})

/*

// These are Routs or Routing
// "get" is a method
server.get('/', (req,res) => {
    console.log("Home Route 😊");
    res.send(" Express server is running!");
})



const fruits = ["Strawberry" , "Mango" , "Guava" , "Custard Apple" , "Papaya" ];

server.get('/fruits' , (req,res) => {
    res.header("Content-Type" , "application/json");
    res.status(200);
    res.send(fruits);
})

server.get('/friends' , (request,response) => {
    response.send(friend_List);
})

server.get('/about', (request, response) => {
    response.send("This is about different types of rounting");
})




// This route handles all except the above defined routes
server.get('*', (request, response) => {
    response.send("The route you have provided is not correct. Kindly provide proper Route handling");
})

*/

server.listen(4001, () => { 
    console.log("Server is running on port number 4001")
});
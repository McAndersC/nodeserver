import express from "express";
import { getUsers } from "./users.js";
import { readUsers, writeUsers } from "./fileHandler.js";
import { createUser } from "./user.js";

const server = express();
server.use(express.json())


server.get('/', (req, res) => {

    res.send('Hello World')

})

/*

    User

*/
server.get('/user', (req, res) => {

    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.status(200);
    res.send({"hello" : "World"})

});

server.post('/user', async (req, res) => {

    createUser(req.body).then( (result) => {

        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.status(200);
        res.send({"hello" : "World"})

    });
    
});
/*

    Users

*/
server.get('/users', (req, res) => {

    getUsers().then( (result) => {

        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.status(200);
        res.send(result)

    } )


});


export default server
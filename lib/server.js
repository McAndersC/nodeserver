import express from "express";
import { getUsers } from "./users.js";
import { readUsers, writeUsers } from "./fileHandler.js";
import { createUser, deleteUser } from "./user.js";
import cors from "cors";

const server = express();
server.use(express.json())
server.use(cors())


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

        console.log("Result", result);

        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.status(200);
        res.send(result);

    });
    
});

server.delete('/user', (req, res) => {

    console.log('ID', req.query.id)

    deleteUser(req.query.id).then( (result) => {

        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.status(200);
        res.send(result);

    })


})


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
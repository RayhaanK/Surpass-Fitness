// controller
const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateUser')
const routes = express.Router()
const {users, products} = require('../model')

// ================User's Router=================
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/user', bodyParser.json(), (req, res)=>{
    users.register(req, res)
})
routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})
routes.put('/user/:id', bodyParser.json(), (req, res)=>{
    users.updateUser(req, res)
})
routes.patch('/user/:id', bodyParser.json(), (req, res)=>{
    users.updateUser(req, res)  
})
routes.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})
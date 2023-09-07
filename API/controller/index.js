// controller
const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateUser')
const routes = express.Router()
const {users, products, orders} = require('../model')

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

// ================Products's Router=================

routes.post('/product', bodyParser.json(), (req, res)=>{
    products.addProduct(req, res)
})

routes.get('/products', (req, res)=>{
    products.fetchProducts(req, res)
})

routes.get('/product/:id', (req, res)=>{
    products.fetchProduct(req, res)
})

routes.get('/product/treadmills', (req, res)=>{
    products.fetchTreadmills(req, res)
})

routes.get('/product/exercisebikes', (req, res)=>{
    products.fetchExerciseBikes(req, res)
})

routes.get('/product/benches', (req, res)=>{
    products.fetchBenches(req, res)
})

routes.get('/product/yogamats', (req, res)=>{
    products.fetchYogaMats(req, res)
})

routes.get('/product/weights', (req, res)=>{
    products.fetchWeights(req, res)
})

routes.get('/product/dumbbell', (req, res)=>{
    products.fetchDumbbell(req, res)
})

routes.get('/product/dumbbell', (req, res)=>{
    products.fetchDumbbell(req, res)
})

routes.get('/nameproduct', (req, res)=>{
    products.sortProductsByName(req, res)
})

routes.put('/product/:id', bodyParser.json(), (req, res)=>{
    products.updateProduct(req, res)
})
routes.patch('/product/:id', bodyParser.json(), (req, res)=>{
    products.updateProduct(req, res)
})

routes.delete('/product/:id', (req, res)=>{
    products.deleteProduct(req, res)
})


// ================Order's Router=================

routes.get('/orders', (req, res)=>{
    orders.fetchOrders(req, res)
})

routes.delete('/order/:id', (req, res)=>{
    orders.deleteOrder(req, res)
})


module.exports = {
    express,
    routes,
    verifyAToken
}
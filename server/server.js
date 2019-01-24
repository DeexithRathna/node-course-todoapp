var express = require('express')
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/Todo')
var {User} = require('./models/User')

var app = express()

app.use(bodyParser.json())


// POST /todos - single item
app.post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc) => {
        res.send(doc)
    }, (err) => {
        res.status(400).send(err)
    })
})


// GET /todos - all items
app.get('/todos', (req,res) => {
    Todo.find().then((todos) => 
    {
        res.send({todos})
    }, (err) => {
        res.status(400).send(err)
    })
})

// GET /todos/id - get specific item by Id
app.get('/todos/:id', (req,res) => {
    res.send(req.params)
})
app.listen(3000, () => {
    console.log('Started express webapp')
})

module.exports = {app}


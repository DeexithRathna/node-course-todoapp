var express = require('express')
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/Todo')
var {User} = require('./models/User')

var app = express()

app.use(bodyParser.json())

app.post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc) => {
        console.log('Saved to db', doc)
        res.send('Success')
    }, (err) => {
        console.log('Error in saving to db', err)
        res.status(400).send(err)
    })
})

app.listen(3000, () => {
    console.log('Started express webapp')
})


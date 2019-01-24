const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/Todo')

const id = '5c4980b70090b47ce87dd08f'
Todo.find({
text: 'Seed data: Todo 2'
}).then((todos) => {
    console.log(todos)
})

Todo.find().then((todos) => {
    console.log(todos)
})

const {Todo} = require('./../server/models/Todo')
const {User} = reuqire('./../server/models/User')

User.insertOne(
    {
        name: 'Deexith Rathna',
        age: 24,
        location: 'Hyderabad'
    }, (err, res) => {
        if(err){
            return console.log('Unable to insert record', err)
        }
        console.log(JSON.stringify(res.ops, undefined, 2))
    })

Todo.insertOne(
    {
        text: 'New Todo',
        completed: false
    }, (err, res) => {
        if(err){
            return console.log('Unable to insert record', err)
        }
        console.log(JSON.stringify(res.ops, undefined, 2))
    })    
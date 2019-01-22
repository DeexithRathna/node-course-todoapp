const {MongoClient, ObjectID} = require('mongodb');

var objId = new ObjectID()

console.log(objId.getTimestamp())
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB')
    }
    console.log('Connection Successful')

    // Delete Many
    // db.collection('Todos').deleteMany({text: 'New Todo'}).then((res)=> {
    //     console.log(res)
    // }, (err) => {
    //     console.log('Unable to delete with the search criteria', err)
    // })

    // db.collection("Todos").deleteOne({text: 'Set Alarm'}).then((res)=> {
    //         console.log('Successfully deleted Set Alaram todo', res.result)
    //     }, (err) => {
    //         console.log('Unable to delete with the search criteria', err)
    //     })

    db.collection('Todos').find({text: 'Set Alarm'}).toArray().then( (docs) => {
        console.log(JSON.stringify(docs, undefined, 2) )
    }, (err) => {
        console.log('Unable to fetch documents',err)
    })
    // db.collection('Todos').insertOne(
    //     {
    //         text: 'New Todo',
    //         completed: false
    //     }, (err, res) => {
    //         if(err){
    //             return console.log('Unable to insert record', err)
    //         }
    //         console.log(JSON.stringify(res.ops, undefined, 2))
    //     })

    // db.collection('Users').insertOne(
    //     {
    //         name: 'Deexith Rathna',
    //         age: 24,
    //         location: 'Hyderabad'
    //     }, (err, res) => {
    //         if(err){
    //             return console.log('Unable to insert record', err)
    //         }
    //         console.log(JSON.stringify(res.ops, undefined, 2))
    //     })

    db.close()
})
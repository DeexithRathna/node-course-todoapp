const {MongoClient, ObjectID} = require('mongodb');

var objId = new ObjectID()

console.log(objId.getTimestamp())
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB')
    }
    console.log('Connection Successful')
    db.collection('Todos').find({_id: new ObjectID('5c45e5c4210b9d79e811ad6c')}).toArray().then( (docs) => {
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
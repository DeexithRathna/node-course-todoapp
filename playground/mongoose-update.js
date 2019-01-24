const {Todo} = require('./../server/models/Todo')
const {User} = reuqire('./../server/models/User')

User.findOneAndUpdate({
    name: 'Deexith Reddy'
}, {
    $set: {
        name: 'Deexith Reddy Rathna'
    },
    $inc: {
        age: 1
    },            
}, {
    returnOriginal: false
}
).then((res) => {
console.log('Updation successful',res)
}, (err) => {
console.log("Error in updating", err)
})
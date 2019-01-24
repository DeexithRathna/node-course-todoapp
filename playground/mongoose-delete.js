const{mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/Todo')


  Todo.deleteMany({
       text: 'New Todo'
   }).then((res) => {
       console.log(res)
   }, (err) => {
       console.log('Unable to delete with the search criteria', err)
   })

   Todo.deleteOne({
       text: 'Set Alarm'
   }).then((res) => {
       console.log('Successfully deleted Set Alaram todo', res.result)
   }, (err) => {
       console.log('Unable to delete with the search criteria', err)
   })
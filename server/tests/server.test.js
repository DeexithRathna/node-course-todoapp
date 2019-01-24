const expect = require('expect')
const request = require('supertest')

const {app} = require('./../server')
const {Todo} = require('./../models/Todo')

const seedTodo = [
    {
        text: 'Seed data: Todo 1'
    },{
        text: 'Seed data: Todo 2'
    }
]
beforeEach( (done) => {
    Todo.deleteMany({}).then( () => {
        return Todo.insertMany(seedTodo)
    }).then(() => done())
})

describe('# POST /todos', () => {
    it('Should create Todos', (done) => {
        var text = 'Test todo through Mocha'
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text)
        })
        .end((err,res) => {
            if(err){
                return done(err)
            }
            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1)
                expect(todos[0].text).toBe(text)
                done()
            }).catch((err) => done(err))
        })
    })

    it('Should NOT create Todos', (done) => {
        var text = 'Test todo through Mocha'
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res) => {
            if(err){
                return done(err)
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(2)
                done()
            }).catch((err) => done(err))
        })
    })    
})

describe('# GET /todos', () => {
    it('Should GET todos', (done) => {
        request(app)
        .get('/todos')
        .expect((res) => {
            expect(res.body.todos.length).toBe(2)
        })
        .end(done)
    })
})
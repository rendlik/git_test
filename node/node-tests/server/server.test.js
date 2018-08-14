const request = require('supertest')
const expect = require('expect')

var app = require('./server').app

describe('Server',()=>{
    describe('GET /',()=>{
        it('should return hello',(done) =>{
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello world!')
                .end(done)
        });
    })
    
    describe('GET /users',()=>{
        it('should return me',(done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect(res => {
                    expect(res.body).toInclude({
                        name: 'Roman',
                        age: 27
                    })
                })
                .end(done)
        })
    })
})

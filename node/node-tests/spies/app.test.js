const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')

describe('App', ()=>{
    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db',db)

    it('should call the spy correctly',() =>{
        let spy = expect.createSpy()
        spy('A',25)
        expect(spy).toHaveBeenCalledWith('A',25)
    })

    it('should call saveUser with user object',() => {
        let email = 'andrew@example.com'
        let password = ' 12345'

        app.handleSignup(email,password)
        expect(db.saveUser).toHaveBeenCalledWith({email,password})
    })

})
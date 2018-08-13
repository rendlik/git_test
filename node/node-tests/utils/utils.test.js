const expect = require('expect')

const utils = require('./utils')

it('should add two numbers',() =>{
    var res = utils.add(33,11)
    expect(res).toBe(44).toBeA('number')
})

it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3, (sum)=> {
        expect(sum).toBe(7)
        done()
    })
})

it('should square a number',()=>{
    var res = utils.square(2)
    expect(res).toBe(4).toBeA("number")
})

it('should async square a number',(done)=>{
    utils.asyncSquare(3,(square) =>{
        expect(square).toBe(9).toBeA('number')
        done()
    })
})

it('should expect sime values', () => {
    // expect(12).toNotBe(11)
    // expect({name: 'Andrew'}).toEqual({name: 'Andrew'})
    // expect([2,3,4]).toInclude(3)
    expect({
        name: 'Andrew',
        age: 25,
        location: "PA"
    }).toInclude({
        age: 25
    })
})

it('should verify first and last name are set',()=>{
    var user = {
        age: 23,
        location: 'PA'
    }
    expect(utils.setName(user,"Roman Stix")).toInclude({
        firstName: "Roman",
        lastName: "Stix"
    }).toBeA('object')
})
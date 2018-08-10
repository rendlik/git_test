const user = {
    name: 'Andrew',
    sayHi: () => {
        // console.log(arguments)
        console.log(`Hi. I am ${this.name}`)
    },
    sayHiAlt () {
        console.log(arguments)
        console.log(`Hi. I am ${this.name}`)
    }
}

user.sayHi(7,8)
user.sayHiAlt(1,2,3)
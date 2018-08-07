const getUsers = (id,callback) => {
    const user = {
        id,
        name: 'Vik'
    }
    setTimeout(()=>{
        callback(user)
    },3000)
    callback(user)
}

getUsers(31,(user) => {
    console.log(user);
})
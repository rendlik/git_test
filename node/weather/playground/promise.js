var asyncAdd = (a,b) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a+b)
            }else{
                reject('Arguments must be numbers')
            }
        },1500)
    })
}


asyncAdd(2,6).then((res)=>{
    console.log(`Result ${res}`)
    return asyncAdd(res,33)
}).then((res)=>{
    console.log(`Should be 39, ${res}`)
}).catch((errorMessage)=>{
    console.log(errorMessage)
})



// const somePromise = new Promise((resolve,reject)=>{
//     setTimeout(() =>{
//         // resolve('it worked')
//         reject('didnt work')
//     },2000)
   
// })

// somePromise.then((message)=>{
//     console.log(`Success: ${message}`);
// },(errorMessage)=>{
//     console.log(`Error: ${errorMessage}`);
// })
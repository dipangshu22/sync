const promise=()=>{
   return new Promise((resolve,reject)=>{
    // resolve("download completed....")
    reject("unstable network")
   })

    
}

let output=promise()

output.then((res)=>{

    console.log("success",res)
})

output.catch((err)=>{
    console.log("failed" ,err)


})
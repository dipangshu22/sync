function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             console.log("data",data)
             resolve("success")
        },3000)
    })
}

async function output(){
    await getdata(1)
    await getdata(2)
    await getdata(3)
}

let data=output()
console.log(data)
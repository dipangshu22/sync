function async1(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
             console.log("data1")
        resolve("success")

        },4000)
    })

}

function async2(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
             console.log("data2")
        resolve("success")

        },4000)
    })


}

console.log("fetching data1")
let result1=async1()
result1.then((res)=>{
    console.log(res)
    console.log("fetching data2")
    let result2=async2()
    result2.then((res)=>{
        console.log(res)
    })
})
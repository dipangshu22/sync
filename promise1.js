function getdata(data,nextdata){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

    console.log("data:",data);
    resolve("success")
    if(nextdata){
        nextdata()
    }
},5000)


    })

}


let result=getdata(1234)
console.log(result)

function getdata(data,nextdata){
setTimeout(()=>{

    console.log("data:",data);
    if(nextdata){
        nextdata()
    }
},2000)

}

getdata(1,()=>{
    getdata(2,()=>{
        getdata(3)
    })
})
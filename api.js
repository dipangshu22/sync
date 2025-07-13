const URL="https://official-joke-api.appspot.com/random_joke"
const text= document.getElementById("text");
const line=document.getElementById("punchline")
const btn=document.querySelector("#punch")

const data=async ()=>{
    console.log("getting data....");
    let response= await fetch(URL);
    console.log(response)
    let output=await response.json()
    text.innerText=output.setup
    line.innerText=output.punchline
   
}

btn.addEventListener("click",data)


// let output=data()
// console.log(output)
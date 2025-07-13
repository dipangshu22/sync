const URL="https://dog.ceo/api/breeds/image/random"

const data=async ()=>{
    console.log("getting data....");
    let response= await fetch(URL);
    console.log(response.status)
}

let output=data()
console.log(output)
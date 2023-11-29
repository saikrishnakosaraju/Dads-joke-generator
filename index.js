const btnEl =document.getElementById("btn");
const jokeEl=document.getElementById("joke")

const Apikey="5CXQuFnIJWTDrWc3+7M30w==7f77VXOBjD1O73fp"
const options ={
    method:"GET",
    headers:{
        'X-Api-Key':Apikey,
    }
}
const ApiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjokes(){
    const response=await fetch(ApiUrl,options)
    const data=await response.json();
    jokeEl.innerText=data[0].joke;

}



btnEl.addEventListener("click",getjokes)

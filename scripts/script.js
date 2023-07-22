const endpoint = "https://api.adviceslip.com/advice"

fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados.slip.advice)
    document.getElementById("id_p").innerText = dados.slip.advice
})

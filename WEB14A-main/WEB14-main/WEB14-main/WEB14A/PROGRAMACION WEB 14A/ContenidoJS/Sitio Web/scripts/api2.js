axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response)=>{
        const resultados =  response.data;
        console.log(resultados)
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(
        console.log("Ha finallizado la peticion")
    )

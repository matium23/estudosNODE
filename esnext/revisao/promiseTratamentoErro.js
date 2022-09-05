

function funcionarOuNao(valor,chanceDeErro){
    return new Promise((resolve,reject)=>{
       try{
        if(Math.random(valor) > chanceDeErro){
            reject("ocorreu um erro")
        }
        else{
            resolve(valor)
        }
       }
       catch(e){
        reject(e)
       }
    })
}
funcionarOuNao("testando...",0.9)
    .then(v => console.log(`valor ${v}`))
    .catch(err => console.log(err))
function esperarTempo(tempo = 2000){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Executar Promise...")
            resolve()
        },tempo)
    })
}

// ao inves de chamar a funçao colocando o (.then) 
// faz uma funçao (async) e chama a funçao criada
//tambem e possivel fazer esse tipo de funçao para substituir uma funçao Promise
async function executar(){
    await esperarTempo(1500)
    console.log('1...')
    await esperarTempo(1500)
    console.log('2...')
    await esperarTempo(1500)
    console.log('3...')
}

executar()
//para sair do Asincronismo e executar como uma funçao normal e preciso chamar o (then)
executar().then(console.log)
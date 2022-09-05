// versao resumida
let pessoas = new Promise(resolve => resolve("roberto"))
pessoas.then(console.log)



// versao completa
let p = new Promise(function(resolve){
    cumprirPromessa(3)
})

p.then(function(valor){
    console.log(valor)
})
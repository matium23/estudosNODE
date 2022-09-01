let pessoas = new Promise(resolve => resolve("roberto"))
pessoas.then(pessoa => console.log(pessoa))




let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
})

p.then(console.log)
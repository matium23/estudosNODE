const fs = require('fs')
const path = require('path')
const caminho = __dirname + '/dados.txt'

//leitura sincrona
const lerArquivo = fs.readFileSync(caminho,'utf-8')
console.log("leitura sincrona")
console.log(lerArquivo)



//leitura assincrona
fs.readFile(caminho,"utf-8",((err,resultado)=>{
    try{
        console.log("leitura assincrona")
        console.log(resultado)
    }
    catch{
        const e = err
        console.log(e.message)
    }
}))
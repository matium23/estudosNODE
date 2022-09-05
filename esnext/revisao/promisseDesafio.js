const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname,'dados.txt')

function lerArquivo(caminho){
    return new Promise(resolve =>{
        fs.readFile(caminho,'utf-8',(err,conteudo) =>{
            resolve(conteudo.toString())
        })
    })
}

lerArquivo(caminho).then(console.log)
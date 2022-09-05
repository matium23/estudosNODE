const fs = require('fs')
const { stringify } = require('querystring')

//diretorio concatenado com o nome do arquivo a ser gerado
const caminho = __dirname + '/ArquivoCriadoComFS' 

//conteudo do arquivo a ser gerado
const produto ={
    nome: "televisao",
    preco: 1.234,
    descont: 0.15
}

//criaçao, escrita e conversao do arquivo para TXT
//arquivo gerado no formato (json) e convertido para (txt)

fs.writeFile(caminho,JSON.stringify(produto),err =>{
    console.log(err || 'arquivo gerado') 
} )
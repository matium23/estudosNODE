const fs = require('fs')

// objeto a ser posto dentro do arquivo a ser criado
const produto = {
    nome: "Geladeira",
    preco: 2.999,
    marca:"Brastemp"
}


// procedimeto que ira criar um arquivo e como o stringFy 
// e converter o aquivo de objeto para texto ou qualquer outra extenção
// com uma função cowback e testado o erro ou um aviso de criaçao

fs.writeFile(__dirname + "novoArquivo.json",JSON.stringify(produto),err =>{
    console.log(err || "arquivo criado")
})
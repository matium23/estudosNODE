
const fs = require("fs")
const caminho = __dirname + "/ioArquivo.json"

fs.readFile(caminho,"utf-8",(err,resultado)=>{
    const rest = JSON.parse(resultado)
    console.log(rest)
})
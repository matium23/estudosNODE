const fs = require('fs')
const caminho = __dirname + "/ioArquivo.json"
const resultado = fs.readFileSync(caminho,"utf-8")

console.log(resultado)
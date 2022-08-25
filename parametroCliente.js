const paramFunc1 = require("./parametroFuncao1")("Roberto",41)
console.log(paramFunc1)

const paramFunc2 = require("./parametroFuncao2")("Geovana","Miguel","Eduarda","Suzi")
console.log(paramFunc2)


const {Pessoa} = require("./parametroClasse")
const pessoa = new Pessoa("Laura",78)
console.log(pessoa.comprimentar())


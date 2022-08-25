// mesmo incrementando somente o numero da referencia1 o valor do numero 
//referencia 2 tbm foi compartilhado como um so resultado

const refUnica1 = require("./referencia1")
const refUnica2 = require("./referencia1")
refUnica1.inc()
refUnica1.inc()
console.log(refUnica1.numero,refUnica2.numero)


// neste caso o valor nao e compartilhado e cada instancia tem seu comportamento diferente 
const refNova1 = require("./referencia2")()
const refNova2 = require("./referencia2")()
refNova1.inc()
refNova1.inc()
console.log(refNova1.numero,refNova2.numero)

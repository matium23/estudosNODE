//funçao errow

// funçao arrow in-line tem o return emplicito
const soma = (a,b) => a + b
console.log(soma(7,8))


//funçao arrow com escopo tem que colocar o return
const subtracao = (a,b) => {
    return a -b
}
console.log(subtracao(15,7))


//uma funçao que ja vem um valor inicioa se caso ano for preenchida
function valorAtribuido(nome = "roberto"){
    console.log(nome)
}



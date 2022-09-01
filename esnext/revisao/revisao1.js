// operador rest (junta tudo dentro de um arrey)
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))

// operador sprad, solta o conteudo de um arrey ou objeto em uma copia
const prouto = {
    nome:'tablet',
    marca:'samsung',
    preco: 5999.00,
    cor: 'branco'
}

const produtoNovo = {dono:'Roberto', ...prouto}
console.log(produtoNovo) //adiciona os atrubutos de produto em produtoNovo



//Destruction

//destruction de string
const [R,o, ...berto] = "Roberto"
console.log(R,o,berto)

// desistruturar um arrey
const [x,y] = [1,2]
console.log(x,y)

// pega somente o indice 0 e 2
const [a, ,c] = [7,9,8]

//desestrutura um objeto (transforma o objeto um 2 constantes nome e idade)
const {nome,idade} =  {nome:"Roberto",idade: 41}



const pessoa = {
    nome: "Roberto",
    idade: 41,
    peso: '83 kg',
    altura: 1.80
}

console.log(Object.values(pessoa)) //retorna os valores dos objetos

console.log(Object.keys(pessoa)) // retorna a chave dos objetos

console.log(Object.entries(pessoa)) // retorna um arrey de arreys com chave e valor


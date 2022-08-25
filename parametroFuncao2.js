// Metudo exporta uma função que recebe uma arrei de nomes  
//e retorna um tamplate string com comprimento para cada nome

module.exports = function(...nome){
    return nome.map(nomes => `Ola eu sou ${nome}`)
}
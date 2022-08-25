class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    comprimentar(){
        return `Meu nome e ${this.nome} e minha diade e ${this.idade}!`
    }
}

module.exports = {
    Pessoa,
}
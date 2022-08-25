// metudo que nao compartilha o resultado com novas instancias 
//ao inves de exportar uma funcão simples e exportada uma Factory e cada instancis um novo objeto

module.exports = () =>{
    return {
        numero: 1,
        inc(){
            this.numero ++
        }
    }
}
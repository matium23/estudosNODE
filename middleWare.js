//padrao MiddleWare, um padrao que executa passos sem que eles dependam um do outros 
//favorecendo o reuso



const pessoa1 = (ctx,next) =>{  //passo 1 chama o proximo passo atraves do next
    ctx.valor1 = "midi1"
    next()
}

const pessoa2 = (ctx,next) =>{ // passo 2 chama o proximo passo atraves do next
    ctx.valor2 = "midi2"
    next()
}

const pessoa3 = ctx => ctx.valor3 = "midi3" // passo 3 nao chama nenhum passo e se for colocado primeiro 
                                            // sera executado e finalizado 


 // Funçao que recebe um contexo e um arei para armazenar funçoes com as logicas dos passoas                                           
const exec = (ctx,...middleWare) =>{
    const executarPasso = indice => {
        middleWare && indice < middleWare.length 
        && middleWare[indice](ctx, () => executarPasso(indice +1))
    }
    executarPasso(0)
}

const ctx = {}

exec(ctx,pessoa1,pessoa2,pessoa3)

console.log(ctx)
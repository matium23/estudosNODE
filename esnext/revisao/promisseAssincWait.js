const http = require('http')

// metudo com um parametro para escolher a turma no template string 
const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve,reject)=>{ //retorna uma promisse
        http.get(url,(res =>{ // recebe a url e envia uma resposta 

            let result = ''//variavel que ira receber o resultado concatenado

            res.on('data',dados =>{ // o parametro de resposta juta os dados no result
                result += dados
            })
            res.on('end',()=>{ // quando finalizado e tratado o erro se ouver
               try{
                resolve(JSON.parse(result)) // transforma o conteudo de result em objeto
               }
               catch(e){
                reject(e) // se rejeitado o erro etratado com o cath
               }
            })
        }))
    })
}

let receberTurma = async () => { // recebe o metudo (asinc)

    const tA = await getTurma("A") // uma variavel recebe o resultado do metudo 
    const tB = await getTurma("B")// assincrono com (await)
    const tC = await getTurma("C")

    return [].concat(tA,tB,tC) //retorna todas elas dentro de um arrey
}

receberTurma() // mapeia o metudo com o (then)
.then(aluno => aluno.map(n => n.nome))
.then(nome => console.log(nome))

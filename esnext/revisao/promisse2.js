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

//recebe um arrey de funçoes como parametro
Promise.all([getTurma('A'),getTurma('B'),getTurma('C')]) 
.then(turma => [].concat(...turma))//joga todos os nomes em um novo arrey
.then(aluno => aluno.map(a => a.nome)) //mapeia so os nomes 
.then(nomes => console.log(nomes)) // imprime somente os nomes 
.catch(e => console.log(e.message))// imprime o erro se ouver
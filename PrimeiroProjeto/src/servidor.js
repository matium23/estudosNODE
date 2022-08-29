const porta = 3003
const express = require('express')
const app = express()
const bancoDados = require('./BancoDados')

app.use(express.json)
app.use(express.urlencoded({extended: true}))

app.get('/produto',(req,resp,next)=>{
    resp.send(bancoDados.getProdutos())
})
app.get('/produto/:id',(req,res)=>{
    res.send(bancoDados.getProduto(req.params.id))
})
app.post('/produto',(req,res)=>{
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)

})

app.listen(porta,()=>{
    console.log(`Servidor executando na porta ${porta}`)
})

  
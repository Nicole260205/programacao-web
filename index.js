const express = require('express')
const app = express()
const estoque = require('./util/estoque')

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const {id, nome, qtd} = req.params
    res.send(estoque.adicionar(id, nome, qtd))
})

app.get('/listar', (req, res) => {
    res.send(estoque.listar())
})

app.get('/remover/:id', (req, res) => {
    const {id} = req.params
    res.send(estoque.remover(id))
})

app.get("/editar/:id/:qtd", (req, res) => {
    const {id, qtd} = req.params
    res.send(estoque.editar(id, qtd))
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("app rodando na porta " + PORT);
});
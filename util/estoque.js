// adicionar, listar, remover, editar

let estoque = []

function adicionar(id, nome, qtd){
    if(estoque.find(p => p.id === id)){
        return `Produto com ID ${id} já existe`
    }
    estoque.push({id, nome, qtd: Number(qtd)})
    return `Produto ${nome} adicionado com sucesso!`
}

function listar(){
    return estoque
}

function remover(id){
    const index = estoque.findIndex(p => p.id === id)
        if(index === -1 ){
            `Produto com ID ${id} não encontrado!`
        }
        estoque.splice(index, 1)
        return `Produto com ID ${id} removido`
    }

function editar(id, qtd) {
  const produto = estoque.find((p) => p.id === id);
  if (!produto) {
    return `Produto com ID ${id} não encontrado`;
  }
  produto.qtd = Number(qtd);
  return `Quantidade atualizada para ${qtd}`;
}

module.exports = { adicionar, listar, remover, editar };
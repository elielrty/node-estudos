const fs = require('fs')

const produto = {
    nome :'celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo') // se o erro nn exite vai vim nulo e vai executar o ou
})
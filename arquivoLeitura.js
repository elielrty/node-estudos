const fs = require('fs')

const caminho = __dirname + '/arquivo.json' // usando _dirname para pegar o caminho independe de onde vc esteja vai ser um caminho fixo

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8') // ler arquivo de forma sincrona nn é recomendado. escrivi o arquivo com um editor usado utf-8 precisa dizer 
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = conteudo
    console.log(`${config.bold.host}:${config.bold.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
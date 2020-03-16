const express = require('express')
const app = express()

app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next()
})

app.use('/opa',(req, res, next) =>{
    console.log('Durante...')
    res.json([
        {id: 7, name: 'Ana', position: 1},
        {id: 10, name: 'calos', position: 2},
        {id: 15, name: 'daniel', position: 3}
    ])
    next()
    //res.send('<h1>Estou bem!</h1>') // pode retornar html tb 
    // res.json({
    //     name: 'ipad 32GB',
    //     price:1899.00,
    //     discont: 0.12
    // })
})

app.use('/opa', (req, res) => {
    console.log('Depois...')
})
app.listen(3001, () => {
    console.log('Backend executando...')
})
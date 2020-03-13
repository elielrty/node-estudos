// operador ... rest(juntar)/spread(espalha)
// usar rest como paramentro de função

// usar spead com objeto 
const funcionario = { nome: 'Maria', salario: 12348.22 }
const clone = { ativo: true, ...funcionario}
console.log(clone)
//usar spreadcom array
const grupoA = ['joão', 'pedro', 'gloria']
const grupoFinal = ['maria', 'rafael', ...grupoA]
console.log(grupoFinal)
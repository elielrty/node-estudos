update estados
set nome = 'Maranhão'
WHERE sigla = 'Ma'

select est.nome from estados est WHERE sigla = "MA"

update estados 
set nome = 'Paraná',
    populacao = 11.32
WHERE sigla = 'PR'

select est.nome, sigla, populacao
from estados est WHERE sigla = 'PR'

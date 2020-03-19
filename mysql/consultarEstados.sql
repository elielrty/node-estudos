select * from estados

select sigla, nome as 'Nome do Estado' from `estados` -- selecionando e colocando label
WHERE regiao = 'Sul'

select nome, regiao, populacao
from estados
where populacao >= 10
order by populacao desc -- ordenadno forma descrecente
### Projeto Avaliativo desenvolvido pela Trybe
---
# Habilidades
Neste projeto você será capaz de:
- Executar buscas complexas no banco mongoDB
- Usar os operadores de aggregation para fazer uma pipeline
Nesse projeto foram utilizados vários datasets, de forma a praticar o uso dos diversos operadores e estágios do `aggregation pipeline`, em vários cenários diferentes.
Os dados utilizados foram do **IMDB**, dados sobre empresas aéreas e também dados que contenham registros de deslocamento de pessoas que utilizam bicicletas.
# Requisitos do projeto

### Desafio 1

#### Retorne todos os filmes que satisfaça, através de uma  _pipeline_, as condições abaixo
* `imdb.rating` deve ser ao menos `7`;
* `genres` não deve conter `Crime` ou `Horror`;
* `rated` deve ser igual a `PG` ou `G`;
* `languages` contém `English` e `Spanish`.
* Utilize a coleção `movies`.
Sua query deve retornar `41` documentos.
### Desafio 2

#### Utilizando o mesmo _pipeline_ anterior, retorne apenas os campos `title`, `rated`, `imdb.rating`, `imdb.votes` e `year`, modificando seus nomes para `titulo`, `avaliado`, `notaIMDB`, `votosIMDB` e `ano`, respectivamente.

O resultado da sua query deve ter o seguinte formato:
```javascript
{ "titulo" : "A Streetcar Named Desire", "avaliado" : "PG", "notaIMDB" : 8.1, "votosIMDB" : 72364, "ano" : 1951 }
```
### Desafio 3

Agora que você tem os campos essenciais, aplique mais um estágio na pipeline do desafio anterior que atenda a seguinte demanda:

#### Retorne esses filmes ordenados por ano e nota IMDB de forma decrescente e por ordem alfabética.

O resultado da sua query deve ter o seguinte formato:
```javascript
{ "titulo" : "McFarland, USA", "avaliado" : "PG", "notaIMDB" : 7.5, "votosIMDB" : 14091, "ano" : 2015 }
// Demais documentos
```
### Desafio 4

#### Crie uma _pipeline_ que retorna documentos  com o novo campo `title_split`, ela deve seguir as seguintes condições:

- `title_split` deve conter uma lista de palavras presentes em `title`.
- A pipeline deve retornar apenas filmes com o título composto apenas de uma palavra.
- A pipeline deve ser ordenada por `title` em ordem alfabética.
Por exemplo, `"Cinderela"` e `"3-25"` devem entrar nessa contagem, mas `"Cast Away"` não.

### Desafio 5

Retornar apenas os atores listados abaixo:
* Sandra Bullock
* Tom Hanks
* Julia Roberts
* Kevin Spacey
* George Clooney

#### Considerando esta lista, crie uma _pipeline_ que retorne o `title` do vigésimo quinto filme da agregação que satisfaz as seguintes condições:

- `countries` é Estados unidos
- `tomatoes.viewer.rating` maior ou igual a `3`
-  Crie um novo campo chamado `num_favs`, que represente quantos atores ou atrizes da nossa lista de favoritos aparecem no elenco (campo `cast`) do filme.
- Ordene os resultados por `num_favs`, `tomatoes.viewer.rating` e `title`, todos em ordem decrescente.
### Desafio 6

#### Considerando todos os filmes que ganharam o Oscar pelo menos uma vez, calcule o **maior valor**, **menor valor**, **média** e o **desvio padrão** das avaliações (campo `imdb.rating`)

### Desafio 7

Vamos nos aprofundar um pouco mais em nossa coleção de filmes.

#### Conte quantos filmes cada um dos atores e atrizes do elenco (`cast`) já participou e obter uma média do campo `imdb.rating` para cada um desses atores e atrizes.

- Considere somente os membros do elenco de filmes com o idioma inglês (`English`).
- Exiba a lista em ordem decrescente de documentos pelo número de filmes e nome do ator ou atriz.

### Desafio 8

#### Liste todas as parcerias da coleção `air_alliances`, que voam rotas com um Boing 747 ou um Airbus A380 , para descobrir qual delas tem o maior número de rotas com esses aviões.

### Desafio 9

#### A partir da coleção `trips`, determine o menor e o maior ano de nascimento.

- Não considere documentos com valores vazios (`""`) ou em que o campo não existe!

### Desafio 10

#### Encontre a média da duração de viagens por tipo de usuário.

- Exiba o valor em horas com apenas duas casas decimais
- Exiba a média de viagens ordenada de forma crescente.

### Desafio 11

#### Determine qual o dia da semana com maior número de viagens iniciadas.

### Desafio 12

#### Usando a pipeline anterior que retorna o dia com mais viagens, determine qual estação tem o maior número de viagens nesse dia da semana.

- Exiba apenas o nome da estação e o total de viagens.

### Desafio 13

#### Determine a duração média das viagens iniciadas no dia `10/03/2016`, em minutos.

### Desafio 14

#### Baseado na duração média das viagens, determine quais são as `5` bicicletas que foram mais utilizadas.

- Exiba o resultado em minutos arredondados para cima e em ordem decrescente.

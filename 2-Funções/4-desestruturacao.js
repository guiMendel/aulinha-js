// Funcao hipotetica que retorna filmes em ordem de avaliacao
const rated_movies = Movies.order_by("rating")
const top_hit = rated_movies[0]

// Se so queriamos o mais votado, precisavamos pegar a lista toda?

// E esse caso:

const server_info = server.get_status()
const server_online = server_info.is_online

// Se so precisavamos saber se ele esta online, precisavamos de todo o seu status?

// Seria muito util poder aplicar um FILTRO na hora de receber esses valores ne...



// Contemple a desestruturacao:

const [letter_a, letter_b] = ['a', 'b', 'c', 'd']

console.log(letter_a, letter_b)

// Perceba que a expressao na esquerda imita a da direita!

// Sempre que ver os [] ou os {} do lado ESQUERDO da atribuicao, eh uma desestruturação!

// Podemos ignorar os valores que nao nos interessam:

const [letter_a, , letter_c] = ['a', 'b', 'c', 'd'] // note a virgula extra!

// Nao precisa ser feita na inicializacao tambem!

let some_dude

[some_dude] = ['Alfredo', 'Monika', 'Stefano', 'Valeria']

console.log(some_dude); // nesse caso se omitirmos o ; vai dar merda

[, , some_dude] = ['Alfredo', 'Monika', 'Stefano', 'Valeria']

console.log(some_dude)

// Da pra pegar o resto tambem!

let whoever_is_left

[, some_dude, ...whoever_is_left] = ['Alfredo', 'Monika', 'Stefano', 'Valeria']

console.log(some_dude)
console.log(whoever_is_left)






// Incrivel! E com objetos? 
// Nesse caso temos um detalhe a mais!

const {surname} = {race: 'Hobbit', name: 'Bilbo', surname: 'Baggins'}

console.log(surname)

// Lembre que com listas o criterio de extração eh a posicao
// Agora o criterio eh o nome da variavel!

// Mas e se quisermos dar um nome diferente poxa

const {name: character_name} = {race: 'Hobbit', name: 'Bilbo', surname: 'Baggins'}

console.log(character_name)

// Ahh mas e se quisermos fazer depois de inicializar?? Mais um detalhe!

let character_race

// Isso daria merda! O JS vai pensar que o "{" esta iniciando um bloco de codigo. Lembra disso?
{character_race} = {race: 'Hobbit', name: 'Bilbo', surname: 'Baggins'}

// Resolver eh facil
({race: character_race} = {race: 'Hobbit', name: 'Bilbo', surname: 'Baggins'})

console.log(character_race)

// Basicamente sempre que der um erro estranho de sintaxe, mete um ()




let character_stuff

({race: character_race, ...character_stuff} = {race: 'Hobbit', name: 'Bilbo', surname: 'Baggins'})

// Qual vai ser o resultado disso?
console.log(character_stuff)

// Como poderiamos resolver os problemas do inicio agora?







const [top_hit] = Movies.order_by("rating")

const {is_online: server_online} = server.get_status()

// E da pra fazer desestruturacao aninhada?

const [, [, response_status]] = ['Account Created!', [201, 'created']]

console.log(response_status)


const {user: {name: user_name}} = {user: {name: 'Alfredo', age: 18}, status: 'ok'}

console.log(user_name)

// Magnifico. Mas isso tem outros usos legais? Ah, em parametros??




// Imagina que um programa todas suas chamadas de funcao nesse padrao:

let summed_value = 42 // recebe qualquer coisa na execucao

request_response({
  body: {
    data: {
      user: {
        account: {
          balance: summed_value
          // outros valores aqui
        }
        // outras informacoes aqui
      }
      // mais dados aqui
    }
    // mais corpo aqui
  }
  // outros metadados aqui
})

// E a gente quer implementar esse request_response, mas so precisa do balance... So desestruturar!

function request_response({
  body: {
    data: {
      user: {
        account: {
          balance
        }
      }
    }
  }
}) {
  console.log(balance)
}

// A assinatura fica feia, mas melhor do que o corpo sempre usar body.data.user.account.balance

// Slides novamente
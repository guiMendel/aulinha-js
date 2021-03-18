// Recebemos uma lista dessa funcao hipotetica
const numbers = get_numbers()

// Nao sabemos quantos sao, mas queremos uma lista com os mesmos numeros dobrados

// So usar uma funcao, facil!

function multiply_list_numbers(multiplier, list) {
  let new_list = []
  for (const number of list) new_list = [...new_list, multiplier * number]
  return new_list
}

console.log(multiply_list_numbers(2, [1, 2, 3, 4, 5]))

// Mas e se precisarmos de outras operacoes?
  // converter para string
  // transformar em true se for maior que 10
  // multiplicar por um numero, depois tirar raiz, depois pegar o resto por outro numero

// Fazemos uma nova funcao para cada caso?

// Vamos entender essa funcao:
  // Cria uma lista vazia
  // Percorre cada um dos numeros, e para cada um:
    // Aplica uma operacao nele

// A unica coisa que mudaria seria o ultimo passo

// E se pudessemos passar para a funcao essa operacao tambem??

function to_string(number) { return `${number}` }

function higher_than_ten(number) { return number > 10 }

function complicated_thing(number) {
  return Math.sqrt(number * 42) % 13
}

// Afinal, essas funcoes nao sao operacoes?

// E se pudessemos fazer algo como:

const result = operation_on_list_elements([1, 2, 3], to_string)

// Boas noticias, a gente pode! Exatamente assim!

// O segundo parametro devera receber uma funcao!
function operation_on_list_elements(list, operation) {
  let new_list = []
  for (const number of list) {
    // Se assumirmos que operation eh uma funcao, podemos chama-la
    result = operation(number)
    // Se ela eh uma funcao ou nao fica a encargo do programador!
    new_list = [...new_list, result]
  }
  return new_list
}

// Agora podemos fazer tudo o que pensamos em fazer antes!
const list = [1, 2, 3, 4, 5, 10, 20, 30]

operation_on_list_elements(list, to_string)
operation_on_list_elements(list, higher_than_ten)
operation_on_list_elements(list, complicated_thing)

// Por que nao usamos o parenteses quando passamos as funcoes de parametros?
  // Vamos ver la no navegador, com direito a console.log

// Acabamos de atingir um novo nivel de abstração. Eh gostoso ne?
// Mas pq abstração é importante?
  // Ferramentas monovalentes vs ferramentas faz tudo





// Mas eh merda ter que ficar declarando uma funcao pra cada caso ne...
// Se eu quisesse uma que faz o quadrado teria q declarar outra funcao...
// Pera, nao precisa????

// FUNCAO ANONIMA
operation_on_list_elements(list, function(number) {
  return number*number
})

// Muito foda. Melhor que isso nao fica.


// Pera, fica?????

// ARROW FUNCTION
operation_on_list_elements(list, number => number * number)

// Lindo! Mas nao entendi.

// Diferentes faces da arrow function:

// (Por que esta tudo entre parenteses?)
((parameter_1, parameter_2) => {
  parameter_1 += parameter_2
  return parameter_1
})

// Se so temos um parametro:

(parameter => {
  return parameter * 2
})

// Se fazemos corpo com so uma expressao, eh igual a:

(parameter => parameter * 2)

// Diferencas entre funcao anonima e arrow function?

// Otima noticia, nao so aprendemos callbacks, como implementamos uma famosa funcao chamada map!

// Isso
operation_on_list_elements(list, to_string)
// Eh identico a isso
list.map(toString)

// Ok, mas ja nao aguento mais. O que sao essas funcoes com ponto no meio???
// SLIDES
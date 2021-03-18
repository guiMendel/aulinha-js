// Isso eh algo esquisito no JS:
console.log("3" + 2)
console.log("3" - 2)

// Nunca use strings assim. User o objeto Number para converte-las!
console.log(Number.parseInt("3") + 2)

// Podemos diferenciar entre float e int com ele

console.log(Number.parseInt("3.4") + 2)

console.log(Number.parseFloat("3.4") + 2)

// Como ele lida com argumento bosta?
console.log(Number.parseFloat("kkkkkkkkkkkj"))

// E se quisermos saber se o usuario forneceu um numero inteiro?

let input = "lel"

console.log(Number.isInteger(input))

// Troquemos '1' e repetemos

// Como vc pode ver, se for string precisa converter antes!
input = Number.parseFloat(input)

console.log(Number.isInteger(input))

//////////////////////////////// math

// Impossivel nao usar esses 3 fazendo joguinho
console.log(Math.min(3.4, 5))
console.log(Math.max(3.4, 5))
console.log(Math.random())

// Outro bem util:
console.log(Math.round(3.4))

// O random sempre fica entre 0 e 1, mas basta multiplicar e somar coisa pra mudar isso

// Entre 0 e 67:
console.log(Math.random() * 67)
// Entre 25 e 50:
console.log(Math.random() * 25 + 25)
// Entre -100 e 100, apenas inteiros:
console.log(Math.round(Math.random() * 200 - 100))

// E o resto eh coisa de cientista maluco:
console.log(Math.PI)
console.log(Math.sin(10))
console.log(Math.cos(10))

console.log(Math.floor(4.5))
console.log(Math.ceil(4.5))

//////////////////////////////// object

const the_queen = {
  name: "Elizabeth Alexandra Mary Windsor",
  age: 94,
  house: "Windsor",
}

// Podemos gerar listas dos atributos e seus valores!
console.log(Object.keys(the_queen))

console.log(Object.values(the_queen))

// Podemos gerar listas com os dois juntos!
console.log(Object.entries(the_queen))

// Isso nos permite uma sapecagem bem legal:
for (const [key, value] of Object.entries(the_queen)) {
  console.log(key, value)
}

// Ou em listas, iteramos pelos itens junto com seus indices!
for (const [index, value] of Object.entries([42, "a", true])) {
  console.log(index, value)
}
// Isso eh muito util, viu! Lembre disso!

// Temos uma ferramenta para copiar os atributos de um objeto para outro
const my_table = {
  age: 3,
  material: "Caravlho",
  size: "3x5",
}
Object.assign(my_table, the_queen)

console.log(my_table)
// Observe que a intersecao, age, ficou com o novo valor!

// Por fim, podemos congelar um objeto para impedir que mexam nele
Object.freeze(the_queen)

the_queen.age = 3
console.log(the_queen)

// Isso eh especialmente util caso voce forneca uma referencia a um objeto que ainda vai usar!

//////////////////////////////// string

// Template literals
// Nos permite formatar uma string e quebrar a linha
const year = 2021
const sad = `Estamos no ano de ${year} e
    eu ainda nao consegui um emprego em uma
    empresa de jogos 😥`
// Com strings normais nao podemos quebrar a linha!

console.log(sad)

// Agora veremos alguns metodos legais

const message =
  "Desencanto (Netflix) é muito bom. Assistam! Tem a voz do Eric Andre mano!"

console.log(message.split(" "))

// Trim resolve aquelas mensagens de maluco
console.log("           oi                ".trim())

// Sim pode chamar metodo direto no primitivo! Explica a gambiarra do JS Guizao

console.log(message.slice(2, 16))
console.log(message.substring(2, 16))
// Esse de cima sao iguais
console.log(message.substr(2, 16))
// Nesse o segundo argumento diz quantos chars eh pra pegar

console.log(message.toLocaleLowerCase())
console.log(message.toLocaleUpperCase())

//////////////////////////////// list

const things = [1, "a", true, 2.4, { name: "Bob" }]

// push e pop operam na ponta da lista
console.log(things)
things.push("É pa comê ou pavê?")
console.log(things)
// ew
things.pop()
console.log(things)

// unshift e shift operam no inicio
things.unshift("Oi!")
console.log(things)
things.shift()
console.log(things)

// Tanto o pop quanto o shift retornam o elemento removido
// Isso eh bem relevante viu!

// Outra coisa: operar no inicio eh mt caro! Pq Guizao?

// Esse eh bem legal
console.log(things.reverse())

// Temos o slice, igual ao de string
// Temos o splice, que serve pra substituir um intervalo da lista por um outro que voce entregar
// Se der uma lista vazia, ele so remove esse intervalo
// Eh util para remover elementos de uma lista!
let numbers = [1, 2, 3, 4, 5]
numbers.splice(1, 1, "oxe!")

console.log(numbers)

numbers.splice(1, 1)

console.log(numbers)

// Esse eh muito util
numbers = [4, 2, 8, 1, 3, 6, 5, 7, 10, 9]
console.log(numbers.sort())

// Uai! Que?? Explica isso Guizao!

// Mas calma! Podemos na verdade especificar como ordenar!

numbers.sort((a, b) => a - b)
console.log(numbers)

// Se o resultado for menor que 0, o primeiro elemento vem antes
// Se o resultado for maior q zero, segundo elemento vem antes!

numbers.sort((a, b) => b - a)
console.log(numbers)

// Isso eh especialmente util se a lista possuir objetos complexos que so vc sabe como ordenar! Basta ensinar ela!

// De fato, temos varios metodos que recebem callbacks nas listas

numbers.forEach((number) => console.log(number ** 3))
// Apenas uma alternativa ao for...of

// O callback do map deve retornar semmpre!

console.log(numbers.map((number) => number * 2))

// O reduce eh como um map, mas ele junta os elementos em um so!

console.log(numbers.reduce((number, next) => number + next))

// Esse eh maravilhoso

numbers = numbers.filter((number) => number <= 5)
console.log(numbers)

// Esses dois testam o conteudo da lista

console.log(numbers.every((number) => number == 2))
console.log(numbers.some((number) => number == 2))

//////////////////////// scheduling

// Esse vcs ja viram

let timer_key = setInterval(() => console.log('lel'), 1000)

// Para se desfazer, basta:

clearInterval(timer_key)

// Mas tambem temos o:

setTimeout(() => console.log('BUUUUUUU'), 5000)

// Tambem eh possivel usar o retorno desta funcao para cancela-la antes que aconteca
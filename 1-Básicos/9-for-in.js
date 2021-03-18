// Imagine a lista:

const users = [
  "João Perez",
  "Mário Antônio",
  "Juliana Ferrez",
  "Lúcia Caldeira",
  "El Chapo",
]

// E se tivessemos que fazer alguma operação com todos??

let clients = `Clientes: ${users[0]}`
clients = `${clients}, ${users[1]}`
clients = `${clients}, ${users[2]}`
clients = `${clients}, ${users[3]}`
clients = `${clients}, ${users[4]}`

console.log(clients)

// Isso nao eh muito DRY, ne?
// E se nao soubessemos a lista de clientes antes de tempo de execucao?

// Contemplem:

clients = "Clientes:"
for (const client of users) {
  clients = `${clients} ${client},`
}

// Vai ficar com uma virgula no final, mas eh facil resolver isso mais pra frente
console.log(clients)





// Para somar numeros de uma lista:

const numbers = [3, 62, 83, 25, 962, 21, 8, 102, 44, 63]

// Necessario inicializar com 0!! Quem sabe por que??
let sum = 0

// Podemos fazer sem as chaves se for so uma expressao
for (const number of numbers) sum += number

console.log(sum)

// Slides de novo

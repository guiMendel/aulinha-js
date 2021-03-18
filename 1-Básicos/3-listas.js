// Listas sao muito simples
const list = [1, 2, 3, true, "Pode colocar o que quiser numa lista!"]

console.log(list)

// Acesso por indice
// Como tudo que eh bom, os indices comecam com 0!
const first_item = list[0]

// Modificar e adicionar itens
list[0] = "Eita mudou!"

console.log(list)

// Consultar o tamanho
console.log(list.length)

// Mas isso realmente conta os itens da lista?
list[20] = "Sapecagem"

console.log(list.length)

console.log(list)

// Como mesclar duas listas?
const list_1 = [1, 2, 3]
const list_2 = ["a", "b", "c"]

// Talvez voce tenha pensado nisso
console.log(list_1 + list_2)

// Mas o JS tem seu proprio jeitinho
console.log([...list_1, ...list_2])

// O spread operator simplesmente espalha os elementos de uma lista num local

// Voltemos pros slides
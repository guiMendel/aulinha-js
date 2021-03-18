// Módulos são diferentes de arquivos normais JS em alguns sentidos
// Até existe outra extensão oficialmente para arquivos modulo (.mjs) mas
// alguns navegadores nem o reconhecem, até pq ninguém usa essa extensão

// Um arquivo módulo pode exportar e importar recursos!
// Vamos aprender a exportar um recurso:

function amazing_function() {
  console.log("Eu sou demais...")
}

// Queremos que essa função seja acessível em outro arquivos de módulo
// O JS so trabalha com exportacao / importacao de objetos
// Basta exportar ela num objeto!

export { amazing_function }

// Mas tambem podemos facilitar nossa vida e exportar assim:

export function say_hi() {
  console.log("hi")
}

// Ele simplesmente adiciona essa funcao ao objeto exportado!

// Podemos exportar o que quiser!

export const nice_number = 42

export let nice_list = [1, 2, 3, 4, 5]

// Podemos renomear ao exportar

const suspicious_number = 69

export { suspicious_number as totally_regular_number }
// Note na sintaxe especial do 'as'

// Por fim, podemos exportar varios itens, mas dar foco para um deles
// Basta que esse item se chame default!

// Poderiamos fazer assim:

const the_one_number = 1

// export { the_one_number as default }

// Funciona bem! Mas o mais comum é isso:

export default the_one_number

// Podemos colocar o default quase sempre em lugares onde podmeos podar o export, como em funcoes

// Mas na pratica, o export default costuma ser utilizado para exportar um objeto (ou uma factory) que
// encapsula todas as entidades que se deseja exportar

// De preferencia para utiliza-lo assim!
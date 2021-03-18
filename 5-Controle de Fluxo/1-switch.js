// Conhecam o switch:

const character = {
  x: 5,
  y: 5,
}

switch (action) {
  case 'w':
    character.y--
  break
  case 's':
    character.y++
  break
  case 'a':
    character.x--
  break
  case 'd':
    character.x++
}

// E se a gente esquecesse de um dos breaks? Dor de cabeca!
// E se quisessemos permitir que o usuario mude o mapeamento das teclas?
// Alem do que, fala serio, eh muito feio isso

// Pense bem: nos nao estamos MAPEANDO de um comando para uma rotina?

// O que no JS é perfeito para mapear as coisas?





// Me acompanhe na seguinte solução:

const actionMapping = {
  w: () => character.y--,
  s: () => character.y++,
  a: () => character.x--,
  d: () => character.x++,
}

// As chaves do objeto sao as possiveis acoes, e seus conteudos sao as respectivas consequencias!
// Agora podemos usar a PROPRIA acao para acessar esse objeto!

// Com apenas essas linhas, nos executamos a acao correspondente!
let action = 'w'
const actionFunction = actionMapping[action]
actionFunction()

// Ou simplesmente:
actionMapping[action]()

// Esse conceito é muito diferente, não faz mal se você não entendeu! Pergunte!!!!








// Podemos lidar com acoes invalidas de um jeito simples:
action = 'j'
const requestedAction = actionMapping[action] ?? (() => console.log('A ação solicitada não existe!'))
requestedAction()

// O mais interessante disso eh como fica mais legível e explícito!




// O tocar da banda aqui é o seguinte:
  // 1. Pega cada um dos cases e transforma eles numa chave de um objeto
  switch (action) {               //              const mapping = {
    case 'w':                     // =====>         w: () => {}
  }                               //              }
  // 2. Pega seus corpos e transforma numa funcao, e associe ela à chave correspondente
  // 3. Uma vez definido o objeto, basta acessar ele com a chave (que seria o equivalente do case)
    // e depois executar a funcao acessada!

// É tranquilo fazer isso sem arrow functions também!

const mapping = {
  w() {
    character.y--
  },
  // s() {
  // ...
}




// E aquele negocio de alterar a mapeacao dos comandos? Mamao com acucar

// Mudar a acao para cima de 'w' para 'i'
actionMapping.i = actionMapping.w
delete actionMapping.w

console.log(actionMapping)

// Voilá !

// Naturalmente, poderiamos ate mesmo adicionar novos comandos ao longo do jogo! Super facil, nao?







// Mas estou dizendo para NUNCA usar o switch?

// De forma alguma! Existem sim casos que ele vai melhor!
// Mas somente quando usarmos ele para fazer o que ele faz BEM

// Imagine um software de controle de admissao na fronteira

switch (condition) {
  case 'dangerous-country':
    if (!pass_interview()) return 'Recusado'

  case 'foreign-country':
    if(!pass_embasssy_protocol()) return 'Recusado'

  case 'suspicious':
    if(!pass_document_review()) return 'Recusado'

  default:
    return 'Aprovado'
    // Dispensamos o break aqui pois ja estamos retornando de qqlr forma

  case 'hostile-country':
    return 'Recusado'
}

// Obs: Ainda é um pouco feio ter que ficar botando esses ifs e returns toda vez ne?
  // Mas acontece que isso nao é culpa do switch.
  // Nao se preocupe: em minutos vamos ver uma solução elegante para isso. Mantenha isso em mente!

// Observe que aqui usamos a cascata ao nosso favor!
// Existem sem duvida casos ainda melhores do que esse, mas eu pessoalmente nunca vi um ainda

// Então saiba que existem bons casos e maus casos para se usar o switch.
// Escolha sempre o mais adequado ao seu problema ATUAL!

// Slides!
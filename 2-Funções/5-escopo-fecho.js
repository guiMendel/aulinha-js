// Igualzinho aqui como era antes!

const name = "Goku"

function salute() {
  console.log(`Oi, meu nome é ${name}!`)
}

salute()




// Ja isso sera que funciona?

function drink_too_much() {
  const all_that_happened = 'Tentei nadar do Mangue (aka Búzios) às margens da Baía de Guanabara, onde o pessoal da UFRJ bebe, até a Ilha do Governador. Parei depois de uns 10 minutos porque não tinha mais fôlego e fiquei boiando pra descansar. Enquanto pensava sobre minhas escolhas na vida, um pescador parou o barco ao lado e me disse pra subir a bordo. Falei que ainda faltava bastante pra terminar, mas ele disse que o pessoal no boteco tinha pagado pra ele me "resgatar". Quando cheguei vomitei uns 20 litros de água, cerveja e melzinho.'
}

drink_too_much()

console.log(all_that_happened)




// Parece que a gente esqueceu tudo que aconteceu quando bebemos um monte...

// Mas e agora, sera que funciona?
// Quais vao executar? A primeira? A segunda? As duas? Nenhuma?

const logged_in = true

if (logged_in) {
  function print_private_data() {
    console.log('eu assisto my little poney')
  }
}
else {
  function print_generic_data() {
    console.log('aranhas não são insetos')
  }
}

print_private_data()

print_generic_data()


// Como voces podem ver, declaracoes de funcoes nao sao 100% como declaracoes de variaveis.
  // Elas ainda precisam ser declaradas antes de serem usadas
  // Mas elas ignoram escopo!
// Isso pode gerar muita confusao e inclusive erros (redefinir uma funcao que ja existia)
// Portanto pensem muiiiito bem antes de fazer algo como isso acima!




// Mas essa de escopo de funcao me deu uma ideia diabolica... E se...







function do_housechores() {
  // Definir uma funcao dentro da outra!!!
  function complain() {
    console.log('AAA que saco que preguiça quero dormir')
  }

  complain()

  console.log('(louça lavada)')

  complain()

  console.log('(tenis limpo)')

  complain()

  console.log('(sala varrida)')

  complain()

  console.log('(janta preparada)')

  console.log('pronto porra vou dormir agora')
}

do_housechores()

// Muito massa! Mas pera...

complain()


// UAI, elas nao ignoravam escopo???

// Ah meu amigo, acontece que o corpo de uma funcao nao define apenas um novo escopo
// Ele define um novo FECHO (closure)

// O escopo confina definicoes de variaveis (normais) e constantes.
// O fecho confina definicoes de variaveis (todas), constantes E funcoes!

// Aqui que ta a maior diferenca entre let e var. O var so eh confinado por fechos
// NAO USE VAR, tipo serio, nunca. Vai resultar em comportamento inesperado

// Definir funcoes dentro de funcoes eh so isso. Nada de especial na verdade

// Vamos dar uma puladinha nos slides e voltar depois!







// Retornar uma funcao, voce disse?

function generate_fan_of(celebrity) {
  function crazy_fan() {
    console.log(`Ai meu DEEEEUS eu amo ${celebrity} com meu corpo e ALMAAAA!!!!!!`)
  }

  return crazy_fan
}

const belieber = generate_fan_of('Justin Bieber')

belieber()


// Nesse caso, usamos uma técnica avançada (não, serio, tem até nome) pra criar uma função
// que se ajusta ao contexto

// Tentem entender funcoes nao como algo estatico, mas como uma caixa, assim como variaveis!
// Caixas podem ser levadas de um canto pra outro, renomeadas, voce faz o que quiser!
  // Lembre que existem funcoes sem nome tambem!

// (Ficou confuso? Avisa! Me faça uma pergunta! Me use!)

// Mas isso tem outros usos, muito interessenates!
// MAS ANTES, SLIIIIDES
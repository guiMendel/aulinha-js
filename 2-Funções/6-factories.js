// Fazer algo um pouco mais complexo:

// É boa prática fazer suas factories com a letra maiúscula!
// Isso ajuda a diferenciar funcoes de pura rotina das funcoes que fabricam coisas
function Counter(initial = 0) {
  let counter = initial

  function get_counter() {
    return counter
  }

  function tick() {
    counter++
  }

  return {
    get_counter,
    tick
  }
}

// Pera, que sintaxe de return eh essa?

// To confuso, nao tem os 2 pontos, so tem os nomes das funcoes...

// Viu como a letra maiuscula ajuda a diferenciar o resultado disso?
const counter = Counter()

console.log(counter.get_counter())

counter.tick()

console.log(counter.get_counter())


// Agora parece ainda mais que esse counter é um objeto com vida propria!

// Isso acontece pq estamos cada vez mais dependendo de uma interface, e menos da implementacao em si!
  // Isso é MUITO bom! É ideal usar interfaces entre as partes de suas aplicações!

// Acontece que o JavaScript facilita a definicao de fabricas com sua sintaxe de CONSTRUTORES

function Cat(name, gender) {
  this.name = name
  this.article = gender === 'female' ? 'a' : 'o'
  this.type = 'Gato'
  // Definimos aqui uma funcao usano a sintaxe de arrow function!
  this.interact = (action) => {
    if (action.includes('comida')) console.log(`${this.name} vem manhos${this.article}`)
    else console.log(`${this.name} ignora sua existência`)
  }
}

// Para construtores temos que usar o new!
const greta = new Cat('Greta', 'female')

console.log(greta)
// interessante, esse objeto veio nomeado!
greta.interact('Fazer carinho com comida na outra mão')

// O que esta acontecendo aqui?

function Dog(name, gender) {
  // o 'new' faz por tras dos panos isso:
  // this = {}
  // Coisa que nao pode ser feita explicitamente
  
  this.name = name
  this.article = gender === 'female' ? 'a' : 'o'
  this.type = 'Cão'
  // Definimos aqui uma funcao usano a sintaxe de arrow function!
  this.interact = (action) => {
    console.log(`${this.name} pula em você e rola no chão, muito animad${this.article} de te ver!`)
  }

  // e depois por tras do panos ele retorna isso:
  // return this
}

const thor = new Dog('Thor', 'male')

console.log(thor)

thor.interact('Fazer carinho na barriga')


// Isso eh confuso? Nao se preocupe. Nao precisa conseguir usar ainda. So saiba que existe!
// Quando voce precisar, pode pesquisar sobre 'construtores' em JS e vc vai lembrar e entender melhor




// Alguem falou em classes? Ave maria...

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Oi, sou ${this.name}`);
  }

}

const user = new User("John");
user.sayHi();

// Nao esquenta com isso, so saiba que existe. Eh basicamente a mesma coisa que o constructor,
// mas com uma sintaxe mais amigavel, ne?
// Pq existe isso? Antes usava-se so construtores, mas com o ES6 vieram as classes

// O buraco aqui eh muito fundo, mas eh bem provavel que vc nunca use isso.
// Se te interessar, estude depois!






// Voltando ao que interessa, onde que as factories brilham?
// Pra que se importar em fazer essa complicacao?

function PaymentModule() {
  // Um monte de funcoes e atributos que a aplicacao usa para lidar com pagamentos
  return {
    start,
    // ...
    user_payment,
    user_transactions_history,
    // ...
  }
}

// Pode usar o construtor ou classe tambem se quiser, mas ai tem que lembrar de colocar o new
const payment_module = PaymentModule()

payment_module.start()

// e ai por exemplo sempre que for fazer um pagamento

payment_module.user_payment({
  user_id: '3rglcouqw9f23-020',
  to: 'Walmart',
  amount: '324.00'
})

// (Por que passar um objeto como argumento?)

// E quando quiser ver o historico

payment_module.user_transactions_history('kdcbwefsdv3239r-9fe')

// Em vez de declarar um monte de funcoes soltas e usar elas,
// voce encapsula funcoes relacionadas (isolando elas do resto do codigo)
// em um objeto, ou um "modulo"!

// Por que eh bom encapsular e isolar as coisas?
// Voce ja guardou mais de um fone de ouvido no mesmo lugar e tudo emaranhou?
// Voce ja teve que trocar as pilhas de um controle? (Imagina se as pilhas nao fossem trocaveis)
// E o que une esses diferentes modulos eh sua INTERFACE

// Modulos em JS sao isso, mas com um detalhe que o melhora ainda mais! Mas isso eh depois



// Slides!
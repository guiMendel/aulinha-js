// Eu gosto de gatos. Voces?

// Vamos programar uma representacao realista de gato.

const Thomas = {
  is_a: "cat",
  name: "Thomas",
  state: "Eternamente faminto",
}

console.log(cat)

// Por mais realista que o Thomas seja, eh sem graca ne?
// Afinal, nem da pra brincar com ele

// Como fazemos ele agir e reagir ao mundo?

// E se... Metessemos uma funcao como um atributo?

const Nala = {
  is_a: "cat",
  name: "Nala",
  state: "Eternamente faminta",
  interact: (action) => {
    if (action.includes("comida")) {
      return "Nala vem toda manhosa e se esfrega em voce enquanto come vorazmente"
    } else {
      return "Nala nem reconhece sua existencia"
    }
  },
}

// Acessamos o metodo como qualquer outro atributo:

Nala.interact("Fazer carinho")
Nala.interact("Dar comida e depois fazer carinho")

// Um objeto eh so uma colecao de variaveis e tambem funcoes!

// Existe uma sintaxe mais amigavel para declarar metodos:
const Jaspar = {
  is_a: "cat",
  name: "Jaspar",
  state: "Eternamente faminto",
  doing: null,
  sleep(sleep) {
    if (!sleep)
      this.doing = setInterval(
        () => console.log("Jaspar mia com cara de quem quer comida"),
        2000,
      )
  },
  // Ignore isso, por enquanto
  saciate() {
    clearInterval(this.doing)
  },
}

// Voce ja viu muitos metodos! console.log eh um metodo!
// Afinal, o que eh console?

// Claro que os metodos podem interagir com os atributos do objeto, usando o this!
const Luna = {
  is_a: "cat",
  name: "Luna",
  state: "Eternamente faminta",
  show_love() {
    console.log(`${this.name} te da algumas lambidinhas carinhosas`)
  },
  feed() {
    this.state = "Temporariamente saciada"
    console.log(`${this.name} come alegremente`)
    this.saciate()
  },
  saciate() {
    this.show_love()
  },
}

console.log(Luna.state)
Luna.feed()
console.log(Luna.state)

// O this eh tao magico que funciona se passarmos pra outro objeto!

Jaspar.feed = Luna.feed

Jaspar.feed()

// Vamos voltar naquela parte do Jaspar que pedi pra voce ignorar na hora

// Observe que a ação feed tem resultados diferentes para Jaspar e para Luna
// Esse fenômeno é conhecido como polimorfismo!

// Antes de votar, lembra que falei que tinha um jeito facil de
// tirar a virgula que ficou sobrando quando juntamos aquelas strings?

let client_names = 'Clientes: Maria, José, Alceu, Pimentinha, Bob,'
// Agora podemos usar um metodo pra resolver isso!
client_names = client_names.slice(0, -1)

console.log(client_names)

// Vamos pros slides!
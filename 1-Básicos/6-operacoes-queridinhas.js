// Qual a utilidade do resto, voce me pergunta? Ora bolas!

// Quer dividir seus usuarios em grupos?
const user_ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// Se sao 4 grupos, qual o grupo do usuario 11?
console.log(user_ids[11] % 4)
// E do 6?
console.log(user_ids[6] % 4)
// E do 3?
console.log(user_ids[3] % 4)

// E num joguinho, como lidar com as bordas da tela?
const screen_width = 100
let player_x = 95
// Se ele se mover 10 para a direita?
player_x = player_x + 10 // vira 105! Passou da borda!
player_x = player_x % screen_width // agora player_x vira 5
// Deu a volta na tela! Assim nasce o pac-man
// No JS, para numeros negativos precisa de um empurraozinho
console.log(((-10 % screen_width) + screen_width) % screen_width)
// Isso eh lombra esquisita do JS. Explica ai Mendel ao vivo

// E por que tanto hype com o coalesce?
// MEU AMIGO

// Suponha que obtivemos essa mensagem de uma requisicao web
let server_response

// Em vez de ter que fazer isso:
if (server_response == null || server_response == undefined) {
  server_response = "Falha ao receber a resposta do servidor"
}
console.log(server_response)

// Podemos fazer simplesmente isso:
console.log(server_response ?? "Falha ao receber a resposta do servidor")
// Alem de ocupar menos linhas, eh muito mais facil e intuitivo de entender ne?

// Ao longo da sua vida voce vai ter MUITOS casos como esse.
// Lembre bem desse operador maravilhoso!
// Ele existe em outras linguagens tambem. Lembre do nome "coalesce"

// Slides!
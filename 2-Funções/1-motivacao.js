// ATENÇÃO, ISSO É UM EXEMPLO DE ALGO PARA NUNCA FAZER! NÃO SE INSPIRE NELE!

// Em alguma parte de um arquivo:

/*
...
*/

const user = {
  name: "Marcelo Galvão",
  id: "uc90u32dsa8a3-3nd",
  age: 42,
  prestidge: 6,
}

// Uma variavel que suponha que ja temos, que representa a conexao com o servidor
let server_connection

// Garante que a conexao eh segura
if (
  // Garante que a conexao eh valida
  server_connection &&
  // Valida o tempo de conexao
  server_connection.validation_token.age > 360000 &&
  // Valida a origem da conexao
  (server_connection.source === "localhost" ||
    server_connection.source === "myhost.br") &&
  // Valida o usuario
  user &&
  user.id &&
  // Garante que o usuario tenha um prestigio minimo para acessar essas funcionalidades
  user.prestige >= 10 &&
  // Garante que o servidor esta pronto para aceitar solicitacoes deste tipo
  server_connection.accepts["new_post"] == true
) {
  // Registra o acesso
  access_records[user.id] = [...access_records[user.id], "New post"]
  user.last_action = "new_post"
  // Solicita autenticacao do usuario
  const inserted_password = prompt("Insira sua senha")
  // Autentica a senha
  if (inserted_password != user.password) {
    alert("Senha incorreta! Ação recusada!")
  } else {
    const title = prompt("Qual o titulo do post?")
    const body = prompt("Redija seu texto")
    const response = server_connection.dispatch({
      type: "new_post",
      user,
      post: {
        title,
        body,
      },
    })
    if (response == "ok") {
      alert("Post criado com sucesso!")
      user.new_post_cooldown = 360000
    } else {
      alert("Ocorreu um erro. Tente novamente mais tarde.")
    }
  }
} else {
  // Registra a violacao
  user.violations = [...user.violations, "unauthorized_request"]
  user.prestidge -= 2
  // Alerta o usuario
  alert("Voce nao tem permissao para acessar este recurso!")
  // Avisa o servidor
  server_connection.reports = [
    ...server_connection.reports,
    "unauthorized_request",
  ]
}

/*
...
*/

// Horripilante, ne?

// Seria bom separar e dar nomes as partes do codigo...

// Pois eu tenho uma boa noticia para voce! Funções!

// Antes meso de enteder o que elas fazem, tenho certeza que o exemplo seguinte já fará mais sentido do que o passado:

/*
...
*/

const user = get_current_user()

const server_connection = get_connection()

// Garante que a conexao eh segura
if (
  // Garante que a conexao eh valida e aceita esse tipo de solicitacao
  validate_connection(server_connection, { accepts: "new_post" }) &&
  // Valida o usuario
  validate_user(user, { minimum_prestige: 10 })
) {
  create_new_post(user)
} else {
  register_violation("unauthorized_request", user, server_connection)
}

/*
...
*/

// Modularização e Separação de Preocupações (Separation of Concerns)

// Definindo funções

// Cabeçalho da função
function sum(number_1, number_2) {
  // Corpo da função
  // Lembre do eval. Primeiro a soma eh avaliada, e o seu resultado eh retornado
  return number_1 + number_2
}

console.log(sum(2, 3))

function square(number) {
  return number ** 2
}

function hypothenuse(a, b) {
  // Podemos fazer corpos com varias linhas
  const sum_of_squares = sum(square(a), square(b))
  // Algumas funcoes ja veem no proprio JS (como o console.log!)
  // Lembre do eval de novo! Primeiro a funcao sqrt eh avaliada, e somente seu resultado eh retornado!
  return Math.sqrt(sum_of_squares)
}

// A funcao de registrar violacao, por exemplo, poderia ser algo como:

function register_violation(violation, user, connection) {
  // Registra a violacao usando os parametros
  user.violations = [...user.violations, violation]
  // Chama outra funcao para saber a pena de prestigio a ser aplicada
  user.prestidge -= violation_penalty(violation)
  // Alerta o usuario usando uma funcao para descobrir a mensagem adequada
  alert(violation_message(violation))
  // Avisa o servidor
  connection.reports = [
    ...connection.reports,
    violation,
  ]
}

// Percebe que nao so ficou mais suscinto, mas tambem podemos reutilizar esse mesmo codigo com outros parametros?

register_violation('unauthorized_request', user, server_connection)
register_violation('bad_conduct', user, server_connection)
register_violation('offensive_language', user, server_connection)

// Imagina se fizessemos essas 3 linhas acima sem funcoes!

// De volta pros slides
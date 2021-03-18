// Imagine uma funcao hipotetica com varias etapas que podem dar errado:

function complicated_logic() {
  // Conecta no server
  const connection = Server.connect()
  if (!connection) return 'Erro de conexao'

  // Preparamos uma funcao para limpar a conexao quando necessario
  function clear_connection() {
    connection.shutdown()
  }

  // Autentica o usuario
  if (!connection.authenticate(id, password)) {
    clear_connection()
    return 'Erro de autenticacao'
  }
  
  // Solicita dados
  const data = connection.get_user_data()
  if (!data) {
    clear_connection()
    'Erro ao solicitar dados do usuario'
  }

  // Realiza uma operacao nos dados
  const result = LogicModule.operate(data)
  if (!result) {
    clear_connection()
    'Erro ao operar nos dados do usuario'
  }

  // Realiza uma requisicao ao db com esses dados
  if (!connection.update_data(data, result)) {
    clear_connection()
    return 'Erro de autenticacao'
  }

  clear_connection()
  
  return 'Operação concluída'
}

// A gente sabe que não ficou bom quando metade do que tá na função não tem a ver com o objetivo dela

// Como melhorar isso?

// Pensa comigo: o ideal é que o fluxo siga um caminho normal enquanto nada der errado
// E no momento que algo der errado, CANCELAR esse fluxo e DESVIA-lo para um fluxo de tratamento para esse erro

// Pois nos temos uma construção que faz exatamente isso!

// Associe a ideia de CANCELAR o fluxo com o comando 'throw'
// E a ideia de DESVIAR para um fluxo de erro com o comando 'catch'

// É literalmente a ideia de o fluxo principal lançar (throw) um erro
// E um fluxo de tratamento especifico reconhece-lo e interceptar (catch) o erro

// Observe:

// O try define o fluxo principal (que executa se nao houverem erros)
try {
  console.log('Oi')

  // Lança um erro
  throw 'Oh nao, algo deu errado!'
  
  console.log('Cheguei aqui!')
}
// Depois do try, nos especificamos o fluxo de erro
catch (error) {
  console.log(error)
}

// Se nao lancarmos o erro, o que acontece?


// Temos a possibilidade de colocar um bloco finally, que executa sempre

try {
  throw 'Memes'
}
catch (message) {
  console.log(message)
} 
finally {
  console.log('Finalmente!')
}

// E sem lancar o erro?


// Acontece que os erros tambem borbulham!
// Ate um catch pegar um error, ele vai borbulhar

function bad_function() {
  throw 'Opa deu cocô'
}

try {
  bad_function()
}
catch (error) {
  console.log(error)
}

// Observe que no try nao temos nenhum throw, mas mesmo assim o catch pega o erro
// Isso pq o erro atingiu o escopo da funcao. Quando isso acontece, a funcao simplesmente passa esse erro pra frente!

// Se fizermos nossas funcoes com essa mentalidade, podemos levantar erros nelas
// Assim quem chamar a funcao deve estar preparado para lidar com eles!

// O exemplo inicial ficaria assim:

function simple_logic() {
  let connection
  try {
    // Conecta no server e autentica o usuario
    connection = Server.connect().authenticate(id, password)
    
    // Solicita dados
    const data = connection.get_user_data()

    // Realiza uma operacao nos dados
    const result = LogicModule.operate(data)

    // Realiza uma requisicao ao db com esses dados
    connection.update_data(data, result)
  }
  catch (error) {
    // Observe que o finally SEMPRE executa, mesmo se retornarmos a funcao!
    return error
  }
  finally {
    if (connection) connection.shutdown()
  }

  return 'Operação concluída'
}

// Usando o try catch, mantivemos no fluxo principal apenas aquilo que lhe diz respeito
// Separamos um fluxo especial de erro para lidar com os erros!
// Separation of concerns, legibilidade e anti prolixidade. Maravilhoso!

// E lembre que podemos fazer outras coisas ainda no catch, como avisar o usuario, registrar o erro, etc

// Aquele exemplo do switch usando essa delicinha de try catch:

try {
  switch (condition) {
    case 'dangerous-country': interview()

    case 'foreign-country': embasssy_protocol()

    case 'suspicious': document_review()

    default: return 'Aprovado'

    case 'hostile-country': return 'Recusado'
  }
}
catch (message) {
  return message
}



// Slides novamente!
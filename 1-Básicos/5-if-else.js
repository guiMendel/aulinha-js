// Nossa primeira ferramenta para controlar o fluxo do programa
const user_signed_in = false

// if recebe um booleano e redireciona o fluxo para o bloco adequado
if (user_signed_in) {
  console.log("Operacao autorizada")
}
else {
  console.log("Operacao rejeitada")
}

// Se for so uma expressao, nao precisa das chaves!
if (true || false) console.log("Operador OR ta funcionando bem")

// Mas podemos fornecer nao booleanos ao if tambem!
if (42) console.log("42 é true???")

// Isso é por causa do conceito de truthy e falsy
// Falsies:
false
0
'' // string vazia
null
undefined
NaN // um caso especial de Number

// O resto eh truthy! Ate mesmo:
'0';
'false';
[]; // lista vazia
{}; // objeto vazio

// Uai que que sao esses ponto e virgula?

// Podemos concatenar ifs e elses
const user_role = 'admin'

if (user_role === 'client') {
  // Funcionalidades de cliente
}
else if (user_role === 'admin') {
  // Funcionalidades de administrador
}
else {
  // Se nao for admin nem cliente
}

// Slides de novo!
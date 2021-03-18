// Mas vei as vezes eu preciso do if...else pra fazer coisa tao boba
const user_role = "admin"

if (user_role === "admin") console.log('Autorizado')
else console.log('Recusado')
// Olha que feio, eh ruim de ler isso

// Seria tao bom fazer em uma linha so...
















































// Mas o que eh isso??
console.log(user_role === "admin" ? "Autorizado" : "Recusado")

// Caralho que lindo, vou usar sempre!
const items = [42, 'cadela', true, 'Victor', Symbol()]

console.log(
  items.length > 2 ? items[2] === false ? 'Caso 1' : 'Caso 2' : 'Caso 3'
)
// Isso ai em cima eh inaceitavel mermao
// Tome cuidado para nao virar um programador ninja
// Fazer um negocio complicado e enxuto nao presta pra nada se ninguem vai entender

// So use o ternario quando ele melhorar a legibilidade do seu codigo!
// Alias, aplique essa regra para TUDO

// SLIDES
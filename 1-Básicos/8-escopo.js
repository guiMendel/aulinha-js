// Escopo se refere ao espaco em que um recurso eh visivel

// Funciona como uma cachoeira!

const user_id = 10203040

if (user_id != null) {
  const login_token = "eugdvn80w3yt03[wjf0p8hrw"
}

console.log(login_token)

// O que sao blocos de codigo?

{
  // Posso abrir um quando eu quiser!
  const best_superhero = "deadpool"
  {
    // Escopo filho: tem acesso
    console.log(best_superhero)
  }
}
// Escopo pai: nao tem acesso
console.log(best_superhero)

// Em geral, so se abre os blocos quando necessario
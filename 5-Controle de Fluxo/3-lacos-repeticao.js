// Já conhecemos o for...of
for (const number of [1, 2, 3]) console.log(number)

// Temos outros 2 for's!

// O for de C:

for (let i = 1; i <= 3; i++) console.log(i)

// Muito menos legivel e mais complicado. Voce provavelmente sempre vai ter
// opcoes melhores que esse!




// Agora para a polemica: o for...in
// Esses dois podem gerar confusao! Preste bem atencao

// O for...of existe especialmente para iterar pelos valores de uma lista
// O for...in eh aplicavel em qualquer objeto e itera pelos seus atributos!

for (const attribute in { name: 'José', age: 34 }) console.log(attribute)





// Vamos comparar os dois:

// Em objetos comuns

for (const number of { name: 'José', age: 34 }) console.log(number)

for (const attribute in { name: 'José', age: 34 }) console.log(attribute)

// Perceba que o for...of so funciona em listas, em nao em objetos comuns!



// Em listas:

for (const letter of ['a', 'b', 'c']) console.log(letter)

for (const attribute in ['a', 'b', 'c']) console.log(attribute)

// Opa! De onde vieram esses numeros?

// Bem, uma lista eh basicamente um objeto cujos atributos sao os indices de seu conteudo!
  // Construindo em cima desse conceito, o JS aplica uma serie de otimizacoes na lista

// Naturalmente, se passaramos pelos atributos, encontramos os indices!

// Mas e se...

const list = [1, 2, 3]

list['cenoura'] = 42

for (const attribute in list) console.log(attribute)

// Bizarro, ne? Nunca façam isso! Jamais!
// JS permite algumas coisas que voce nunca deveria fazer.




// Temos agora outros 2 vindos do C, mas com usos mais decentes:

// O while

let number = 0

while (++number <= 3) console.log(number)

// Nao use ele em casos como esse, no entanto. Hehe

// E o do...while

number = 5
do {
  console.log(number)
} while (number <= 3)

// Perceba que ele ja comecou invalido para a comparacao, mas executou uma iteracao



// Duas ferramentas preciosas dos laços:

// O continue

for (const number of [1, 2, 3, 4, 5]) {
  if (number == 3) continue
  console.log(number)
}

// E o break

for (const number of [1, 2, 3, 4, 5]) {
  if (number == 3) break
  console.log(number)
}

// Sera que eu deveria abusar do break?



// Sliiides!
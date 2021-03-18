// Atribuicao
let number = 42

// Soma e subtracao
number = 100 + 10 - 5 // number vira 105

// Multiplicacao e divisao
number = 100 / 5 // number vira 20
number = 2 * 5 // number vira 10

// Podemos naturalmente usar as variaveis nas operacoes!
number = number * number // number vira 100 (10 * 10)

// Resto
number = 10 % 3 // number vira 1, o resto de 10 / 3
// interessante esse, ne?

// Exponenciacao
number = 2 ** 3 // number vira 8

// Shifts
// Voces vao estudar isso jaja! Mas por enquanto, cada shift
// equivale a uma multiplicacao ou divisao por 2
number = 8 >> 1 // number vira 4
number = 8 << 1 // number vira 16
number = -8 >> 1 // number vira 2147483644, naturalmente

// Bitwise operations
// And: &
// Or: &
// XOr: &

// And logico
let boolean = true && false // boolean vira false

// Or logico
boolean = true || false // boolean vira true

// Negacao
boolean = !true // boolean vira false

// Comparacao
boolean = 10 == 5 // boolean vira false
boolean = 10 == "10" // boolean vira true
// se for fazer comparacao assim, apesar de que funciona,
// melhor fazer conversao de tipos! Busque sempre ser claro.
// 10 == Number("10")

// Comparacao com tipo
boolean = 10 === "10" // boolean vira false

// Coalescência
number = 0 ?? 5 // number vira 0

let uninitialized_data
number = uninitialized_data ?? 10 // number vira 10
// uuuh esse eh muito interessante, diz ai

// Funciona com null tambem!
let empty_data = null
number = empty_data ?? 50 // number vira 50

// A atribuicao pode ser combinada com qualquer outra operacao
number = 10

number += 90 // number vira 100 (10 + 90)

number *= 5 // number vira 500 (100 * 5)

number %= 90 // number vira 50 (500 % 90)

number ??= null // number mantem seu antigo valor!

number ??= false // number vira false, pois eh nao nulo

number ||= true // number vira true (false || true)

// Vamos voltar pros slides!
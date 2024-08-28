let nome = 'Roberto'

let numero = 123

let usuarioVerificado = false

if(usuarioVerificado){
    console.log("usuário verificado")
}else{
    console.log("usuário não é verificado")
}

let pessoa = null

let telefone = undefined

let a = 2
let b = 5

console.log(a>=b)

let primeiroValor = 6
let segundoValor = 3

console.log(primeiroValor + segundoValor)
console.log(primeiroValor - segundoValor)
console.log(primeiroValor / segundoValor)
console.log(primeiroValor * segundoValor)
console.log(primeiroValor % segundoValor)

// for(inicializador; condicao; incremento){
//     declaracao
// }

for(let i = 0; i < 5; i++){
    console.log(i)
}

// while(condicao){
//     <bloco de execucao>
// }

let aa = 10
let bb = 15

while(aa < bb){
    console.log('incrementando a variável a ' + aa)
    aa++;
}

var i = 1

do {
    console.log('entrou' + i)
    i++
}while(i<=5)


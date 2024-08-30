// let nome = 'Roberto'

// let numero = 123

// let usuarioVerificado = false

// if(usuarioVerificado){
//     console.log("usuário verificado")
// }else{
//     console.log("usuário não é verificado")
// }

// let pessoa = null

// let telefone = undefined

// let a = 2
// let b = 5

// console.log(a>=b)

// let primeiroValor = 6
// let segundoValor = 3

// console.log(primeiroValor + segundoValor)
// console.log(primeiroValor - segundoValor)
// console.log(primeiroValor / segundoValor)
// console.log(primeiroValor * segundoValor)
// console.log(primeiroValor % segundoValor)

// // for(inicializador; condicao; incremento){
// //     declaracao
// // }

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// // while(condicao){
// //     <bloco de execucao>
// // }

// let aa = 10
// let bb = 15

// while(aa < bb){
//     console.log('incrementando a variável a ' + aa)
//     aa++;
// }

// var i = 1

// do {
//     console.log('entrou' + i)
//     i++
// }while(i<=5)

// let nomeFilme = 'Capitão América'

// if(nomeFilme === 'Vingadores'){
//     console.log('É o filme dos Vingadores')
// }else if(nomeFilme === 'Batman vs Superman'){
//     console.log('É o  filme do Batman vs Superman')
// }else if(nomeFilme === 'Capitão América'){
//     console.log('É o filme do Capitão América')
// }else{
//     console.log('É outro filme')
// }

// false ? console.log('condição verdadeira') : console.log('condição falsa')

// nomeFilme === 'Vingadores' ? console.log('É o filme dos Vingadores') : console.log('É outro filme')

// switch(nomeFilme){
//     case'Vingadores':
//         console.log('É o filme dos Vingadores')
//         break
//     case 'Barman vc Superman':
//         console.log('É o filme do Batman vs Superman')
//         break
//     case 'Senhor dos Anéis':
//         console.log('É o filme do Senhor dos Anéis')
//         break
//     default:
//         console.log('É outro filme')
//         break
// }


// let avaliacao = 5

// switch(avaliacao){
//     case 1:
//     case 2:
//         console.log('Filme ruim')
//         break
//     case 3:
//     case 4:
//         console.log('Filme mediano')
//         break
//     case 5:
//         console.log('Filme excelente')
//         break
//     default:
//         console.log('Nota inválida')
//         break    
// }

// // function primerioTeste(){
// //     alert('Olá mundo!')
// // }

// // primerioTeste()


// function soma(numero1, numero2){
//     return numero1 + numero2
// }

// let resultadoDaSoma = soma(10, 10)
// console.log(resultadoDaSoma)

// resultadoDaSoma = soma(resultadoDaSoma, 7)
// console.log(resultadoDaSoma)


// function incentivarQuester(nomeQuester = 'Yan'){
//     alert('Muito bem ' + nomeQuester + ', você chegou ao JS, continue assim!')
// }

// incentivarQuester()

// let nn = -5
// let mm = -70

// console.log(nn + mm)

const nomeDoUsuario = prompt('Digite seu nome: ')

alert('Seja bem vindo(a), ' + nomeDoUsuario + '!')
// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  const altura = +prompt("Digite a altura do retângulo")
  const largura = +prompt("Digite a largura do retângulo")

  const area = altura * largura
  console.log(area)

}


// EXERCÍCIO 02
function imprimeIdade() {
  
  const anoAtual = +prompt("Digite o ano atual")
  const anoNascimento = +prompt("Digite o ano do seu nascimento")

  const idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  // peso = +prompt("Digite o seu peso")
  // altura = +prompt("Digite a sua altura (em metros)")

  IMC = peso / (altura * altura)

  return IMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {

  const nome = prompt("Digite o seu nome")
  const idade = prompt("Digite a sua idade")
  const email = prompt("Digite o seu e-mail")


  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {

  const cor1 = prompt("Digite a sua cor favorita")
  const cor2 = prompt("Digite a sua segunda cor favorita")
  const cor3 = prompt("Digite a sua terceira cor favorita")

  arrayDeCores = [cor1, cor2, cor3]

  console.log(arrayDeCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  stringEmMaiuscula = string.toUpperCase()
  return stringEmMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  const totalIngressosNecessario = custo / valorIngresso

  return totalIngressosNecessario

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  const stringCheck1 = string1.length
  const stringCheck2 = string2.length

  const stringCheckFinal = stringCheck1 == stringCheck2

  return stringCheckFinal

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return array[0]
  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  const arrayAuxiliar = array.slice()
  arrayAuxiliar.reverse()

  // console.log(`Array: ${array}` )
  // console.log(`Array Aux: ${arrayAuxiliar}`)

  array.splice([array.length-1], 1, arrayAuxiliar[arrayAuxiliar.length-1])
  // console.log("Pós alteração do último número:", array)
  // console.log("Principal Primeiro", array[0])
  // console.log("Auxiliar Primeiro:", arrayAuxiliar[0])
  array.splice(!array[0], 1, arrayAuxiliar[0])
  // console.log(array)

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  const  ajusteString1 = string1.toLowerCase()
  const  ajusteString2 = string2.toLowerCase()
  
  const stringCheck = ajusteString1 === ajusteString2

  console.log (stringCheck)

  return stringCheck

}

// EXERCÍCIO 13
function checaRenovacaoRG() {

  const anoAtual = +prompt("Digite o ano atual")
  const anoNascimento = +prompt("Digita o seu ano de nascimento")
  const anoRGEmissao = +prompt("Ano em que seu RG foi emitido")

  const idade = anoAtual - anoNascimento
  const tempoRG = anoAtual - anoRGEmissao

  const checkIdadeAte20Anos = idade <= 20
  const checkIdadeAte50Anos = idade >= 20 && idade <= 50
  const checkIdadeApos50Anos = idade > 50

  const checkRGAte20Anos = tempoRG >= 5
  const checkRGAte50Anos = tempoRG >= 10
  const checkRGApos50anos = tempoRG >= 15

  const renovacaoAte20anos = checkIdadeAte20Anos === true && checkRGAte20Anos === true
  const renovacaoAte50anos = checkIdadeAte50Anos === true && checkRGAte50Anos === true
  const renovacaoApos50anos = checkIdadeApos50Anos === true && checkRGApos50anos === true

  const checkRenovacao = renovacaoAte20anos === true || renovacaoAte50anos === true || renovacaoApos50anos === true 

  console.log(checkRenovacao)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  const  divisivelPor4 = ano % 4 === 0
  const divisivelPor100 = ano % 100 === 0
  const divisivelPor400 = ano % 400 === 0

  const checagemAno = divisivelPor4 && !divisivelPor100 || divisivelPor400

  return checagemAno
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

  const idade = prompt("Você tem mais de 18 anos? (Responda: sim ou não)")
  const ensinoMedio = prompt("Você possui ensino médio completo? (Responda: sim ou não)")
  const disponibilidade = prompt("  * Você possui disponibilidade exclusiva durante os horários do curso? (Responda: sim ou não)")

  const validadeInscricao = idade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim"

  console.log(validadeInscricao)

}
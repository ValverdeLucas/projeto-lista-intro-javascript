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

  area = altura * largura
  console.log(area)

}


// EXERCÍCIO 02
function imprimeIdade() {
  
  anoAtual = +prompt("Digite o ano atual")
  anoNascimento = +prompt("Digite o ano do seu nascimento")

  idade = anoAtual - anoNascimento
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

  custo 
  valorIngresso

  totalIngressosNecessario = custo / valorIngresso

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
  // implemente sua lógica aqui

// arrayFinal = 

// return arrayFinal

}

// EXERCÍCIO 12
// function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
//   ajusteString1 = string1.toLowerCase()
//   ajusteString2 = string2.toLowerCase()
  
//   const stringCheck = ajusteString1 === ajusteString2

//   console.log (stringCheck)

//   return stringCheck



// EXERCÍCIO 13
function checaRenovacaoRG() {

  const anoAtual = +prompt("Digite o ano atual")
  const anoNascimento = +prompt("Digita o seu ano de nascimento")
  const anoRGEmissao = +promp ("Ano em que seu RG foi emitido")

  const idade = anoAtual - anoNascimento
  const tempoRG = anoAtual - anoRGEmissao

  const checkRenovacaoAte20Anos = idade <= 20
  const checkRenovacaoAte50Anos = idade >= 20 && idade <= 50
  const checkRenovacaoApos50Anos = idade > 50

  const renovacaoAte20anos = checkRenovacaoAte20Anos === true
  const renovacaoAte50anos = checkRenovacaoAte50Anos === true
  const renovacaoApos50anos = checkRenovacaoApos50Anos === true

  const checkRenovacao =  

  console.log(`A carteira precisa ser renovada? ${checkRenovacao}`)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  divisivelPor4 = ano % 4 === 0
  divisivelPor100 = ano % 100 === 0
  divisivelPor400 = ano % 400 === 0

  checagemAno = divisivelPor4 && !divisivelPor100 || divisivelPor400

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
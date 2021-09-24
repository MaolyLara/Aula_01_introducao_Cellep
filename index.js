// Isto é um cometario en JavaScript
/*  

Isto é um cometario de 

de

Multiplas linhas


*/

// Ferramenta de depuração
console.log('Olá desenvolvedor!')

// Variáveis em JavaScript
/* é uma boa prática sempre comencar o nome da variável com letra minuscula e caso o nome seja composto utilizar o padrao camelCase.
É importante o nome representar o seu conteudo */
var nomeCompleto = 'Maoly Lara Serrano'
console.log(nomeCompleto) 
var numero = 10
console.log(numero)

// Tipos de variaveis

// String - É uma texto, é uma cadeia de caracteres

var nome = "Raul Alfonzo" //'Ivanna' - pôde usar aspas simple ou duplas

console. log(typeof(nome))

//Number

var idade = 38 //tipo inteiro
var peso = 85.7 // tipo float (fracionado)
console.log(typeof(idade))

//Booleans aceita solamente dois valores 
//Verdadeiro (true) ou Falso (false)

var davidTemDinheiro = true
console.log(typeof(davidTemDinheiro))


//Constantes
//variáveis imu táveis - não deixa alteral o seu valor
const pi = 3.1415

// Operadores Matemáticos
// + Adição 

var num1 = 10
var num2 = 5
console.log(num1 + num2)

// - Subtração 

var num1 = 10
var num2 = 5
console.log(num1 - num2)

// * Multiplicação 

var num1 = 10
var num2 = 5
console.log(num1 * num2)

// / Divisão 

var num1 = 10
var num2 = 3
console.log(num1 / num2)

// % Resto da Divisão

var num1 = 10
var num2 = 5
console.log(num1 % num2)

// ++ Incremento

var num1 = 10
var num2 = 3
num2++
console.log(num2)

// -- Decremento 

var num1 = 10
var num2 = 3
num2--
console.log(--num2)
console.log(num2--) // = Antes e depois 
console.log(num2)

//Concatenação 
var nomeCompleto2 = 'Raul Alfonzo Luis Garcia Lara'
console.log('Bem vindo ao Curso Backend de Cellep ' + nomeCompleto + ' e ' + nomeCompleto2)

console.log('20'+"21")
num1 = '20'
num2 = "21"

// Conversão de tipo string para tipo number
// Number(String)
console.log(Number(num1)+ Number(num2))

num1 = '20.0'
num2 = "21.5"

// Conversão de tipo string para tipo number
// Number(String) tanto para Int como para Float(decimal)
console.log(Number(num1)+ Number(num2))

//Operadores de Atribuições 
// = Atribui um valor a uma variável
// += Atribuições Soma
// -= Atribuições Resta
// *= Atribuições Multiplicação 
// /= Atribuições Divisão 
// %= Atribuições Resto de a Divisão 

var outroNumero = 16
outroNumero += 4
console.log(outroNumero)

var outroNumero = 16
outroNumero -= 4
console.log(outroNumero)

var outroNumero = 16
outroNumero *= 4
console.log(outroNumero)

var outroNumero = 16
outroNumero /= 4
console.log(outroNumero)

var outroNumero = 16
outroNumero %= 4
console.log(outroNumero)

// Operadores Relacionais
// Retornan um valor booleando de True ou False
// == é o igual da matemática
// === operador identico, ele leva em consideração o tipo
// != diferente
// !== diferente o tipo
// > Maior que
// < Menor que
// >= Maior ou Igual
// <= Menor ou Igual

console.log(2 == 2)
console.log(2 == '2')
console.log(2 === '2')
console.log(2 != '2')
console.log(2 !== '2')
console.log(4 < 4)
console.log(4 <= 4)

// Operadores Logícos

// && AND -> este operador exige que ambas condições sejam verdadeiras para o resultado ser true

var nome = 'Paulo'
var senha = '1234'
//console.log(true && true)
console.log (nome == 'root' && senha == '1234') 
console.log (nome == 'Paulo' && senha == '1234') 
console.log (nome == 'Paulo' && senha == '11234') 

// || OR -> este operador exige que pelo menos uma condiçõesverdadeira

console.log(true || false)
console.log(false || false)
console.log(false || true)

// Função: é um blodo de código que pode ser chamado e executado varias vezes

// Função sem parametros

function soma1(){
  console.log(6 + 2)
}

soma1()

soma1()


// Função com parametros

function soma(num1, num2){
  console.log(num1 + num2)
}

soma(10, 5)

soma(8, 4)

// Função Parametros e com Retorno

 function soma2(num1, num2){
  return num1 + num2
}

var resultado = soma2(20, 5)
console.log(resultado)

//Listas no Javascript (ARRAY)

var capitais = ["São Paulo", "Distrito Federal", "Salvador"]
console.log(capitais[1])
console.log(capitais[0])

//


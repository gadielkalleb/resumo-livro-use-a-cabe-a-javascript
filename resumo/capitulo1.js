// Uma Pequena introdução ao javascript 

// Variaveis e valores 
// Variaveis como em qualquer linguagem servem para armazenar valores momentâneos na memoria
// para cria uma variavel em Javascript basta usar "var" e nome da variavel:

var qualquerCoisa; // nesse exemplo crio uma variavel vazia, essa variavel vai ter um valor undefined 
                   // pois nao defini um valor a ela no javascript é possivel fazer isso, pois posso
                   // usar ela em outro ponto do meu codigo atribuindo um valor qualquer.

// Agora passando realmente um valor para a variavel:

var winners = 2; // aqui declaramos um variavel winners e atribuimos o valor 2 a ela 
var name = "Duke"; // atribuimos uma string para esta, uma string sempre fica dentro de " ".
var isEligible = false; // aqui um valor booleano(sim ou não, verdadeiro ou falso, 0 ou 1, etc)

// posso colocar espressões matematicas dentro de variaveis, ate mesmo concatenar strings

var soma = 1 + 2;
var somaTextos = "aqui " + "esta " + "uma soma";

// Na programção temos modos de usar ou repetir comportamentos dentro do nosso codigo usando um laço de repetição
// Loop: while, for, for in e forEach.
// vamos começar com while.

var scoops = 10; // aqui digo que scoops vale 10

// uma instrução while começa com a palavra chave "while"
while (scoops > 0) { // dentro do parenteses temos uma expressao booleana é um teste condicional 
    // oque estiver dentro de {} é o bloco é oque vai ser executado enquanto a 
    // condição for verdadeira
    document.write("testando nossa condição!!!!!")
    scoops = scoops - 1;
}
// quando for falsa o loop para

// temos tambem instruções de decisões if(se) e else(senão)

if (scoops < 3) {
    alert("scoops é menor que 3")
} else {
    alert("scoops é maior que 3")
}

// aqui podemos criar varios tipos de expressões pois temos varias possibilidades de de decisões
// < menor
// > maior
// <= menor igual
// >= maior igual
// != diferente
// == iqualdade
// == igualdade de tipos(mais tarde falarei sobre isso)
// Logo entraremos nesse assunto sobre operadores.

// nesse capitulo temos aguns tipos de interação com o usuario

// alert():
var alerta = alert("temos um alerta");

// console.log():
console.log(alerta);

// document.write():
document.write("insiro um pequeno html e texto no seu navegador");

// document object model ou DOM é minha estrutura da pagina, uma arvore de todos os elementos do meu html
// é praticamente um mapa do meu html começando no DOM e se ramificando por toda a estrutura.
// o javascript consegue manipular todos os elementos do DOM, criando comportamentos na pagina.

// como usamos esses codigos deste capitulo?
// Simples podemos usar o navegador, basta clicar com o botão direito do mouse e clicar em especionar elemento.
// pode ser que esteja escrito de forma diferente mas não foge muito "inspecionar", provavelmente vai abrir uma
// janela onde vai ter uma opção de console.vc pode testar todos os codigos por ali.


// podemos criar um arquivo html e testar nosso codigo temos duas maneiras aqui:
// (1) dentro do seu arquivo html pode usar as tags <html><head></head><body></body></html>
// dentro da tag <head></head> você pode colocar uma tag <script src="AQUI VOCÊ COLOCA O CAMINHO DO ARQUIVO JS" ></script>
// dessa forma criamos um arquivo .js exemplo: teste.js. e passamos o caminho dentro de src.

// (2) ou dentro do html dentro da tag body usamos a tag <script>E ESCREVEMOS DIRETAMENTE  NOSSO CODIGO AQUI </script>

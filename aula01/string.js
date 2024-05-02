'use strict' // é para proibir que usem variavel sem declarar

var nome_usuario // snake_case
var nomeUsuario // camelCase
var NomeUsuario // PascalCase
// var nome-usuario// kebab-case 

nome_usuario = 'Junior';
nomeUsuario = "Felype";
NomeUsuario = `Alice`;

console.log('Olá, Mundo!')
console.log('Olá,', nome_usuario);
console.log('Olá, ' + nomeUsuario);
console.log(`Olá, ${NomeUsuario}`);
console.log(`A soma de 5 + 5 é: ${5 +5}`);

var idade = 22

console.log(`Eu sou a ${NomeUsuario} e tenho ${idade} anos de idade.`);


// o correto para declarar variavel é let

// var é escopo global e pode ser redeclarada, causando problemas.

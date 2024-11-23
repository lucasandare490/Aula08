# Documentação da aula 08- 

## Informações Gerais
- **Data de Execução**: 22/11/2024
- **Aluno**: Pedro Lucas
# Exercícios de JavaScript (revisão)


## Passos Realizados


### Exercicio 01

# Objetivo
A função deve verificar a idade de uma pessoa e retornar a classificação adequada ("Menor de idade" ou "Maior de idade") com base na idade fornecida.

# conclusão do que eu fiz

Criei uma função chamada verificarIdade que:

Recebe um número (idade).
E Retorne "Menor de idade" se a idade for menor que 18, ou "Maior de idade" se for 18 ou mais.
Testei com as idades 15, 18 e 21.


/**
 * Verifica se a idade de uma pessoa é maior ou menor de idade.
 *
 * @param {number} idade - A idade da pessoa a ser verificada.
 * @returns {string} "Menor de idade" se a idade for menor que 18, 
 *                   "Maior de idade" se a idade for 18 ou mais.
 */
function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else {
        return "Maior de idade";
    }
}

// Chamando a função para os valores especificados e exibindo o resultado no console
console.log(verificarIdade(15));  // Resultado: Menor de idade
console.log(verificarIdade(18));  // Resultado: Maior de idade
console.log(verificarIdade(21));  // Resultado: Maior de idade


### Exercicio 02

# objetivo 
uma função que ajuda a identificar o nome do dia da semana com base em um número, e trata casos em que o número fornecido não é válido (fora de 1 a 7).

# conclusão do que eu fiz
Criei a função: A função deve ser chamada definirDiaDaSemana e deve receber um número como parâmetro.
Usei uma estrutura condicional (switch ou if/else) para verificar o número e retornar o nome do dia correspondente.
Verifiquei números fora do intervalo (menor que 1 ou maior que 7) e retornar "Número inválido".


/**
 * Retorna o nome do dia da semana correspondente ao número fornecido.
 *
 * @param {number} numero - O número representando o dia da semana (1 a 7).
 * @returns {string} O nome do dia da semana ou "Número inválido" caso o número não esteja entre 1 e 7.
 */
function definirDiaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

// Chamando a função para os valores especificados e exibindo o resultado no console
console.log(definirDiaDaSemana(3));  // Resultado: Terça-feira
console.log(definirDiaDaSemana(7));  // Resultado: Sábado
console.log(definirDiaDaSemana(8));  // Resultado: Número inválido


### Exercicio 03

# Objetivo
precisa criar a função parOuImpar, que verifica se um número é par ou ímpar usando o operador ternário. Se for par, retorna "Par", e se for ímpar, retorna "Ímpar".

# conclusão do que eu fiz
Criei a função parOuImpar: A função deve receber um número como argumento.
Usaei o operador ternário para verificar a condição:
A condição a ser verificada é se o número é par (número % 2 === 0).
Se a condição for verdadeira (número é par), a função retorna "Par".
Caso contrário (número é ímpar), a função retorna "Ímpar".

/**
 * Verifica se um número é par ou ímpar.
 *
 * @param {number} numero - O número a ser verificado.
 * @returns {string} "Par" se o número for par, "Ímpar" caso contrário.
 */
function parOuImpar(numero) {
    // Utilizando o operador ternário para verificar se o número é par ou ímpar
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

// Chamando a função para os valores especificados e exibindo o resultado no console
console.log(parOuImpar(10));  // Resultado: Par
console.log(parOuImpar(15));  // Resultado: Ímpar
console.log(parOuImpar(22));  // Resultado: Par


### Exercicio 04

# Objetivo
cria a função podeAcessar que:
Verifica se o usuário é maior de 18 ou é administrador.
Verifica se a conta não está bloqueada.
Retorna true se as condições forem atendidas, caso contrário, retorna false.

# conclusão do que eu fiz
Condição (usuario.idade > 18 || usuario.isAdmin): Verifica se a pessoa tem mais de 18 anos ou se ela é administradora.
Condição !usuario.isBlocked: Verifica se a conta não está bloqueada (ou seja, isBlocked é false).
Resultado:
Se ambas as condições forem verdadeiras, a função retorna true (acesso permitido).
Se qualquer condição falhar, a função retorna false (acesso negado).


/**
 * Verifica se um usuário pode acessar o sistema com base nas suas propriedades.
 *
 * @param {Object} usuario - O objeto que contém as propriedades do usuário.
 * @param {number} usuario.idade - A idade do usuário.
 * @param {boolean} usuario.isAdmin - Indica se o usuário é administrador.
 * @param {boolean} usuario.isBlocked - Indica se a conta do usuário está bloqueada.
 * @returns {boolean} Retorna true se o usuário pode acessar o sistema, caso contrário, retorna false.
 */
function podeAcessar(usuario) {
    // Verifica se o usuário tem mais de 18 anos ou é administrador,
    // e também verifica se a conta não está bloqueada.
    return (usuario.idade > 18 || usuario.isAdmin) && !usuario.isBlocked;
}

// Testando a função com os valores fornecidos
console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));  // false


### Exercicio 05

# Objetivo 
Cria uma arrow function que recebe o preço e a porcentagem de desconto.
Calcular o preço com o desconto.
Retornar o preço final após o desconto ser aplicado.

# Conclusão do que eu fiz
Criei uma função do tipo arrow function chamada calcularDesconto que recebe dois parâmetros:
Preço original.
Porcentagem de desconto.
Calcule o preço com o desconto usando a fórmula:
preço com desconto = preço original preço original x desconto dividido por 100
Retorne o preço final após o desconto ser aplicado.

/**
 * Calcula o preço com o desconto aplicado.
 *
 * @param {number} precoOriginal - O preço original do produto.
 * @param {number} desconto - A porcentagem de desconto a ser aplicada.
 * @returns {number} O preço com o desconto aplicado.
 */
const calcularDesconto = (precoOriginal, desconto) => {
    return precoOriginal - (precoOriginal * (desconto / 100));
};

// Testando a função com os valores fornecidos
console.log(calcularDesconto(100, 10));  // Resultado: 90
console.log(calcularDesconto(250, 20));  // Resultado: 200
# Documentação da aula 08- 

## Informações Gerais
- **Data de Execução**: 22/11/2024
- **Aluno**: Pedro Lucas
# Exercícios de JavaScript (revisão)


## Passos Realizados


### Exercicio 01

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

function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else {
        return "Maior de idade";
    }
}

console.log(verificarIdade(15));  
console.log(verificarIdade(18));  
console.log(verificarIdade(21));  


const calcularDesconto = (precoOriginal, desconto) => {
    return precoOriginal - (precoOriginal * (desconto / 100));
};


console.log(calcularDesconto(100, 10)); 
console.log(calcularDesconto(250, 20));  
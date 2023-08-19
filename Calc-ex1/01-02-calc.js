const num1 = parseFloat(prompt("Informe um número: "));
const num2 = parseFloat(prompt("Informe outro número: "));
const operador = prompt("Digite um operador matemático (+, -, *, /)");


// criando uma função para calcular o resultado

function calc(operador, num1, num2){
    // Criando um objeto operacoes que vai receber um operador e vai realizar a operação indicada.
    const operacoes = {
        "+": (n1, n2) => n1 + n2,
        "-": (n1, n2) => n1 - n2,
        "*": (n1, n2) => n1 * n2,
        "/": (n1, n2) =>n1 / n2
    }

    // Operador ternário para verificar se existe uma função de cálculo em operacoes.
    // Se o operador for válido, retorna o resultado da operação, caso contrário, retorna NaN.
    return operacoes[operador] ? operacoes[operador](num1, num2) : NaN;

}

/*criando um if para vericar se num1 é num2 não é um NaN,
se num1 e  não for NaN  chame a função calc passando o operador e num1 e num2 como parametro
*/

if(!isNaN(num1) && !isNaN(num2)) {
    const resultado = calc(operador, num1, num2)
    // se o retorno da função calc for um numero mostre o valor do resultado se não mostre operador invalido (calc verifica qual é o operador e faz a soma, se o operador não for os predefinidos torna NaN)
    if (!isNaN(resultado)){
        alert(`O resultado da operação é: ${resultado}`);
    }else {
        alert("Digite um operador válido");
    }
    
}// se não for um numero mostre a mensagem abaixo.
else {
    alert("Digite um número válido");
}
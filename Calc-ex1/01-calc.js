//Atribuindo valores as variaveis
const num1 = parseFloat(prompt("Informe um numero: "));
const num2 = parseFloat(prompt("informe outro numero"));
const operador = prompt("Digite um operador matemático (+, -, *, /)");

//verificando se é numero e qual operador foi digitado
// verificar se num1 e num2 não são numeros invalidos 
if (!isNaN(num1) && !isNaN(num2)){
    if (operador === "+"){
        const calc = num1 + num2;
        alert('o total dessa operação é : '+ calc);
    } else if (operador === "-"){
        const calc = num1 - num2;
        alert('o total desse operação é : '+ calc);
    } else if (operador === "*"){
        const calc = num1 * num2;
        alert('o total desse operação é : '+ calc);
    } else if (operador === "/"){
        const calc = num1 / num2;
        alert('o total desse operação é : '+ calc);
    }else{
        alert("digite um operador valido");
    }


} else{
    alert("Digite um numero válido");
};


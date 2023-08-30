let num_A = Number (20);
let num_B = Number (25);
let valor_do_resultado;

let soma = num_A + num_B;
let sub = num_A - num_B;
let multi = num_A * num_B;
let divisao = num_A / num_B;

valor_do_resultado = num_A + num_B;
console.log("Valor dos resultados" ,num_A ,"e", num_B, "e",valor_do_resultado);

valor_do_resultado = num_A - num_B;
console.log("Valor dos resultados" ,num_A ,"e", num_B, "e",valor_do_resultado);
valor_do_resultado = num_A * num_B;
console.log("Valor dos resultados" ,num_A ,"e", num_B, "e",valor_do_resultado);

valor_do_resultado = num_A / num_B;
console.log("Valor dos resultados" ,num_A ,"e", num_B, "e",valor_do_resultado);


function fatorialR(n){
    if (n == 1 ){
        return 1;
    }
    return n* fatorialR (n - 1);
}

function calcularFatorial (fatorial){
    if (isNaN(fatorial)){
        return 'ERRO 404';
    }
    if (!Number.isInteger(fatorial) || fatorial < 0 ){
       return 'ERRO 404';
    }
     if(fatorial === 0 || fatorial === 1){
        return 1;
     }
     return fatorialR(fatorial);
}

console.log(calcularFatorial(-5));
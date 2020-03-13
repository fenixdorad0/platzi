for (var numeros=0;numeros <= 100;numeros++){
    var numeroGenerado=aleatorio(10,220);
    var numeroProbado=numeroGenerado%3;
    document.write(numeroGenerado + "," +numeroProbado);

    if (numeroGenerado%3==0){
        document.write("el numero es modulo de 3" +"<br />");
    }
    else if (numeroGenerado%3 & numeroGenerado%5){
        document.write("es modulo de 3 y 5" +"<br />");
    }
    else{
        document.write("NP es modulo de 3 y 5" +"<br />");
    }
}


function aleatorio(minimo,maximo)
{
    var resultado;
    resultado=Math.floor(Math.random()*(maximo-minimo+1))+minimo;
    return resultado;
}
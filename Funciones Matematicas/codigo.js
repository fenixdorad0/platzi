var texto = document.getElementById("text_lineas");
var boton = document.getElementById("botoncito");

//boton.addEventListener("click",dibujoPorClick);


function dibujoPorClick()
{
    var x = texto.value;
    alert("No me toces ;(" + x);
}

var minimo=10;
var maximo=20;

for (var i=0; i<10 ; i++){
    document.write(aleatorio(10,220) + ",");
}


function aleatorio(minimo,maximo)
{
    var resultado;
    resultado=Math.floor(Math.random()*(maximo-minimo+1))+minimo;
    return resultado;
}
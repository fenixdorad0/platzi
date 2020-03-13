var texto = document.getElementById("text_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click",dibujoPorClick);


function dibujoPorClick()
{
    var x = texto.value;
    alert("No me toces ;(" + x);
}
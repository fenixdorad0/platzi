var teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

};

console.log(teclas);
/*document.addEventListener("keydown", dibujarTeclado);*/
document.addEventListener("keydown", dibujarTeclado2);
var cuadrito= document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 250, y = 250;


dibujarLinea("red", 248,248,250,250, papel);
/*
function dibujarTeclado(evento)
{
    console.log("teclado oprimida down");    
    console.log(evento);

    abajo 40
    izq 37
    dere 39
    abajo 38
}
*/


function dibujarTeclado2(evento)
{
    //console.log("teclado oprimida up");    
    //console.log(evento.keyCode);
    //console.log(evento);
    //console.log(evento.key);
    var movimiento = 10;

    if (evento.keyCode == teclas.UP){
        console.log("con altura");
        dibujarLinea("red",x,y,x,y-movimiento,papel);
        y=y-movimiento;
    }
    else if (evento.keyCode == teclas.DOWN){
        console.log("con down");
        dibujarLinea("red",x,y,x,y+movimiento,papel);
        y=y+movimiento;
    }
    else if (evento.keyCode == teclas.LEFT){
        console.log("con left");
        dibujarLinea("red",x,y,x-movimiento,y,papel);
        x=x-movimiento;
    }
    else if (evento.keyCode == teclas.RIGHT){
        dibujarLinea("red",x,y,x+movimiento,y,papel);
        x=x+movimiento;
        console.log("con right");
    }
    
}




function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}



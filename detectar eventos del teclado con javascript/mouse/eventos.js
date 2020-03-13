// Variables
var cuadrito= document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var clikeando= false;
// Listeners
document.addEventListener("mousedown", oprimiendoClick);
document.addEventListener("mouseup", solteClick);
document.addEventListener("mousemove", muevoMouse);
// Functions
function oprimiendoClick(evento)
{
    clikeando=true;
}
function solteClick(evento)
{
    clikeando=false;
}
function muevoMouse(evento)
{
    
    if (clikeando==true){
       
        dibujarLinea("red",evento.layerX,evento.layerY,evento.layerX+1,evento.layerY+1,papel);
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
//codigo
var x = 250, y = 250;
dibujarLinea("red", 248,248,250,250, papel);





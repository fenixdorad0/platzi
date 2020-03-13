document.write("wenas");

var d = document.getElementById("cuadrito");
var lienzo = d.getContext("2d");


var contador=0;
var yi=0;
var xf=500;
var lineas = 50;
var aumentos=10;

while(contador < lineas)
{
    
    yi=yi+aumentos;
    xf=xf-aumentos;
    dibujarLinea("blue",0,yi,xf,0);
    
    contador=contador+1;    
}





xi=0;
yf=500;
lineas = 50;
contador=0;
while(contador < lineas)
{
    xi=xi+aumentos;
    yf=yf-aumentos;
    dibujarLinea("green",xi,500,500,yf);    
    contador=contador+1;    
}

//diamante interno
xi=0;
yf=500;
lineas = 50;
contador=0;
while(contador < lineas)
{
    xi=xi+aumentos;
    yf=yf-aumentos;
    dibujarLinea("green",xi/2,500/2,500/2,yf/2);    
    contador=contador+1;    
}

xi=500;
yf=500;
lineas = 50;
contador=0;
while(contador < lineas)
{
    xi=xi-aumentos;
    yf=yf-aumentos;
    dibujarLinea("yellow",500,xi,yf,0);    
    contador=contador+1;    
}


xi=0;
yf=0;
lineas = 50;
contador=0;
while(contador < lineas)
{
    xi=xi+aumentos;
    yf=yf+aumentos;
    dibujarLinea("red",0,xi,yf,500);    
    contador=contador+1;    
}

xi=500;
yf=500;
lineas = 50;
contador=0;
while(contador < lineas)
{
    //0-50
    //1-50
    //49-50

    xi=xi+aumentos;
    yf=yf-aumentos;
    dibujarLinea("orange",0,xi/2,yf/2,500/2);    
    contador=contador+1;    
}

lineas = 10;
var resultado;
for(var contador2=0;contador2 <= 10;contador2=contador2+2)
{
    resultado=2*contador2;
    alert("Tabla : "+resultado)
}

var resultado;
for(var tabla=0;tabla <= 20;tabla=tabla+2)
{    
    alert("Tabla : "+tabla)
}




dibujarLinea("yellow",250,0,250,500);    


function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}



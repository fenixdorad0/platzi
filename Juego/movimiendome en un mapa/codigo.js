var vp= document.getElementById("mapa_del_juego");
var papel=vp.getContext("2d");
var mapa = "tile.png";
var x = 250, y = 250;
var teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

};
var fondo = {
    url: "tile.png",
    cargaOK: false
}
var vaca = 
{
    url: "vaca.png",
    cargaOK: false
};
var pollo =
{
    url: "pollo.png",
    cargaOK: false

};
var cerdo =
{
    url: "cerdo.png",
    cargaOK: false
};
fondo.imagen= new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen= new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

pollo.imagen= new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

cerdo.imagen= new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

document.addEventListener("keydown", dibujarTeclado2);
function cargarFondo()
{
    fondo.cargaOK=true;
    dibujar();
}
function cargarVacas(){
    vaca.cargaOK=true;
    dibujar();
}
function cargarPollos(){
    pollo.cargaOK=true;
    dibujar();
}

function cargarCerdos(){
    cerdo.cargaOK=true;
    dibujar();
}


function dibujar()
{

    if (fondo.cargaOK){
        papel.drawImage(fondo.imagen,0,0);
    }
    
    
        
}

function dibujarTeclado2(evento)
{
    //console.log("teclado oprimida up");    
    //console.log(evento.keyCode);
    //console.log(evento);
    //console.log(evento.key);
    dibujar();
    var movimiento = 60;

    if (evento.keyCode == teclas.UP){
        console.log("con altura");
        papel.drawImage(cerdo.imagen,x,y-movimiento)
        dibujarLinea("red",x,y,x,y-movimiento,papel);
        y=y-movimiento;
    }
    else if (evento.keyCode == teclas.DOWN){
        console.log("con down");
        dibujarLinea("red",x,y,x,y+movimiento,papel);
        papel.drawImage(cerdo.imagen,x,y+movimiento)
        y=y+movimiento;
    }
    else if (evento.keyCode == teclas.LEFT){
        console.log("con left");
        dibujarLinea("red",x,y,x-movimiento,y,papel);
        papel.drawImage(cerdo.imagen,x-movimiento,y)
        x=x-movimiento;
    }
    else if (evento.keyCode == teclas.RIGHT){
        dibujarLinea("red",x,y,x+movimiento,y,papel);
        papel.drawImage(cerdo.imagen,x+movimiento,y)
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


for (var i=0; i<10 ; i++){
    
var minimo=10;
var maximo=20;
    document.write(aleatorio(10,220) + ",");
}


function aleatorio(minimo,maximo)
{
    var resultado;
    resultado=Math.floor(Math.random()*(maximo-minimo+1))+minimo;
    return resultado;
}
var vp= document.getElementById("mapa_del_juego");
var papel=vp.getContext("2d");
var mapa = "tile.png";
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
    if (vaca.cargaOK){
        for(var vacas=0;vacas<aleatorio(0,15);vacas++){
            var x = aleatorio(0,6)*80;
            var y = aleatorio(0,6)*80;
            papel.drawImage(vaca.imagen,x,y)
        }
    }
    if (pollo.cargaOK){
        for(var vacas=0;vacas<aleatorio(0,15);vacas++){
            var x = aleatorio(0,6)*80;
            var y = aleatorio(0,6)*80;
            papel.drawImage(pollo.imagen,x,y)
        }
    }
    if (cerdo.cargaOK){
        for(var vacas=0;vacas<aleatorio(0,15);vacas++){
            var x = aleatorio(0,6)*80;
            var y = aleatorio(0,6)*80;
            papel.drawImage(cerdo.imagen,x,y)
        }
    }
        
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
var imagenes = [];
imagenes["diez"] ="10.png";
imagenes["veinte"] ="20.png"; 
imagenes["cincuenta"] ="50.png";  
class Billete
{
    constructor(valor,cantidad,nombre)
    {
        this.nombre=nombre;
        this.imagen = new Image();
        this.valor=valor;
        this.cantidad=cantidad;
        this.imagen.src=imagenes[this.nombre];
    }
}

function entregarDinero()
{
    var t =document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (bi of caja)
    {
        if (dinero>0)
        {
            div=Math.floor(dinero/bi.valor);
            if (div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else 
            {
                papeles = div;
            }

            entregado.push(new Billete(bi.valor,papeles,bi.nombre));
            dinero -=(bi.valor *papeles);
        }
    }
    if (dinero>0)
    {
        resultado.innerHTML=("cajero pobre");
    }
    else
    {

    for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                console.log("soy el sapo" +e);
                resultado.appendChild(e.imagen);
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
            }
        }
    }
}

var dinero=0;
var caja =[];
var entregado=[];
var division=0;
var papeles=0;



caja.push(new Billete(50,30 ,"cincuenta"));
caja.push(new Billete(20,20 ,"veinte"));
caja.push(new Billete(10,20 ,"diez"));

var resultado =document.getElementById("resultado");
var b =document.getElementById("extraer");
b.addEventListener("click",entregarDinero);
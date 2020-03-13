var imagenes = [];

imagenes["pikachu"] ="vaca.png";
imagenes["snorlax"] ="cerdo.png"; 
imagenes["tortuga"] ="pollo.png";  

var coleccion = [];

coleccion.push(new Pakiman("pikachu",100,1020,"trueno"));
coleccion.push(new Pakiman("snorlax",1200,1020,"tierra"));
coleccion.push(new Pakiman("tortuga",1030,1080,"agua"));

for (cont in coleccion)
{
    coleccion[cont].mostrar();
}
for (cont of coleccion)
{
    coleccion[cont].mostrar();
}






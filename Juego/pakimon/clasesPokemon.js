class Pakiman
{
    constructor(nombre,vida,ataque,tipo)
    {
        this.imagen = new Image();
        this.nombre=nombre;
        this.vida=vida;
        this.ataque=ataque;        
        this.tipo="tierra";
        this.imagen.src=imagenes[this.nombre];
    }

    hablar()
    {
        alert(this.nombre);
    }

    mostrar()
    {
        document.write("<br>");  
        document.body.appendChild(this.imagen);
        document.write("<p>");        
        document.write("<strong>" +this.nombre + "</strong> <br>");
        document.write("vida: " +this.vida + " <br>");
        document.write("ataque: " +this.ataque + " <br>");
        document.write("tipo: " +this.tipo + "<br>");
        document.write("<hr>")
        document.write("</p");
    }
}
class Autito{
    constructor(x, y, direc)
    {
        this.x=x;
        this.y=y;
        this.direc=direc;
    }

    generarTablero(filas, columnas)
    {
      this.filas = filas;
      this.columnas=columnas;
      this.matriz = new Array(filas);
      for (let i = 0; i < filas+1; i++) 
      {
          this.matriz[i] = new Array(columnas);
      }
    }

    asignarValores(comando)
    {
        var cadena = comando.toString().split(',');
        if (cadena.length !== 3)
        {
            return "Valores erroneos";    
        }
        else
        {
            this.x = +cadena[0];
            this.y = +cadena[1];
            this.direc = cadena[2];
        }
    }
}
export default Autito;
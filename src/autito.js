class Autito {
  constructor(x, y, direc) {
    this.x = x;
    this.y = y;
    this.direc = direc;
  }

  generarTablero(filas, columnas) {
    this.filas = filas;
    this.columnas = columnas;
    this.matriz = new Array(filas);
    for (let i = 0; i < filas + 1; i++) {
      this.matriz[i] = new Array(columnas);
    }
  }

  asignarValores(comando) {
    var cadena = comando.toString().split(",");
    if (cadena.length !== 3) {
      return "Valores erroneos";
    } else {
      this.x = +cadena[0];
      this.y = +cadena[1];
      this.direc = cadena[2];
    }
  }

  definirPosIni(comando) {
    let res = this.asignarValores(comando);
    if (res === undefined) {
      return comando;
    } else {
      return res;
    }
  }

  definirTamanioTablero(dimensiones) {
    let tamTab = dimensiones.split(",");
    if (tamTab.length == 2) {
      this.generarTablero(+tamTab[0], +tamTab[1]);
      return dimensiones;
    } else {
      return "Valores erroneos";
    }
  }

  avanzar() {
    switch (this.direc) {
      case "N":
        if (this.y > 0) this.matriz[this.x][this.y--];
        return this.x + "," + this.y;
      case "O":
        if (this.x > 0) this.matriz[this.x--][this.y];
        return this.x + "," + this.y;
      case "S":
        if (this.y < this.columnas) this.matriz[this.x][this.y++];
        return this.x + "," + this.y;
      case "E":
        if (this.x < this.filas) this.matriz[this.x++][this.y];
        return this.x + "," + this.y;
      default:
        return 0;
    }
  }

  girarDerecha(){
    switch(this.direc) {
      case "N":
        this.direc="E";
        return this.direc;
      case "E":
        this.direc="S";
        return this.direc;
      case "S":
        this.direc="O";
        return this.direc;
      case "O":
        this.direc="N";
        return this.direc;  
    }
  }
}
export default Autito;

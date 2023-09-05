import Autito from "./autito";

describe("Autito", () => {
    let autito = new Autito(0,0,"N");
  
    it("debería generar un tablero correctamente", () => {
      autito.generarTablero(5,5);
      expect(autito.matriz.length).toEqual(6);
      expect(autito.matriz[0].length).toEqual(5);
    });
    it("debería asignar valores de posición correctamente", () => {
        autito.asignarValores("2,3,N");
        expect(autito.x).toBe(2);
        expect(autito.y).toBe(3);
        expect(autito.direc).toBe("N");
    });
    it("debería definir la posición inicial correctamente", () => {
        const comando = "4,2,E";
        const resultado = autito.definirPosIni(comando);
        expect(resultado).toBe(comando);
        expect(autito.x).toBe(4);
        expect(autito.y).toBe(2);
        expect(autito.direc).toBe("E");
    });
    it("debería retornar error", () => {
        const comando = "4,2";
        const resultado = autito.definirPosIni(comando);
        expect(resultado).toEqual("Valores erroneos");
    });
    it("deberia crear un tablero 5x5", () => {
        expect(autito.definirTamanioTablero("5,5")).toEqual("5,5");
    });
    it("deberia devolver valores erroneos", () => {
        expect(autito.definirTamanioTablero("5")).toEqual("Valores erroneos");
    });
    it("deberia avanzar hacia el Este", () => {
        autito.definirPosIni("4,2,E")
        expect(autito.avanzar()).toEqual("5,2");
    });
    it("no deberia avanzar hacia el Este", () => {
        autito.definirPosIni("5,5,E")
        expect(autito.avanzar()).toEqual("5,5");
    });
    it("deberia avanzar hacia el Oeste", () => {
        autito.definirPosIni("4,2,O")
        expect(autito.avanzar()).toEqual("3,2");
    });
    it("no deberia avanzar hacia el Oeste", () => {
        autito.definirPosIni("0,0,O")
        expect(autito.avanzar()).toEqual("0,0");
    });
    it("deberia avanzar hacia el Norte", () => {
        autito.definirPosIni("4,2,N")
        expect(autito.avanzar()).toEqual("4,1");
    });
    it("no deberia avanzar hacia el Norte", () => {
        autito.definirPosIni("0,0,N")
        expect(autito.avanzar()).toEqual("0,0");
    });
    it("deberia avanzar hacia el Sur", () => {
        autito.definirPosIni("4,2,S")
        expect(autito.avanzar()).toEqual("4,3");
    });
    it("no deberia avanzar hacia el Sud", () => {
        autito.definirPosIni("5,5,S")
        expect(autito.avanzar()).toEqual("5,5");
    });
    it("no se puede avanzar", () => {
        autito.definirPosIni("4,2,X")
        expect(autito.avanzar()).toEqual(0);
    });
    it("debería girar del sur al oeste", () => {
        autito.definirPosIni("4,2,S")
        expect(autito.girarDerecha()).toEqual("O");
    });
    it("debería girar del oeste al norte", () => {
        autito.definirPosIni("4,2,O")
        expect(autito.girarDerecha()).toEqual("N");
    });
    it("debería girar del norte al este", () => {
        autito.definirPosIni("4,2,N")
        expect(autito.girarDerecha()).toEqual("E");
    });
    it("debería girar del este al sur", () => {
        autito.definirPosIni("4,2,E")
        expect(autito.girarDerecha()).toEqual("S");
    });
    it("debería girar del sur al este", () => {
        autito.definirPosIni("4,2,S")
        expect(autito.girarIzquierda()).toEqual("E");
    });
    it("debería girar del este al norte", () => {
        autito.definirPosIni("4,2,E")
        expect(autito.girarIzquierda()).toEqual("N");
    });
    it("debería girar del norte al oeste", () => {
        autito.definirPosIni("4,2,N")
        expect(autito.girarIzquierda()).toEqual("O");
    });
    it("debería girar del oeste al sur", () => {
        autito.definirPosIni("4,2,O")
        expect(autito.girarIzquierda()).toEqual("S");
    });
    it("debería interpretar el comando de avanzar", () => {
        autito.definirPosIni("4,2,O")
        expect(autito.interpretarComando("A")).toEqual("3,2,O");
    });
    it("debería interpretar el comando de girar derecha", () => {
        autito.definirPosIni("4,2,O")
        expect(autito.interpretarComando("D")).toEqual("4,2,N");
    });
});  
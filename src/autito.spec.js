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
    it("deberia avanzar hacia el Oeste", () => {
        autito.definirPosIni("4,2,O")
        expect(autito.avanzar()).toEqual("3,2");
    });
});  
import Autito from "./autito";

describe("Autito", () => {
    let autito = new Autito(0,0,"N");
  
    it("debería generar un tablero correctamente", () => {
      autito.generarTablero(5,5);
      expect(autito.matriz.length).toEqual(6);
      expect(autito.matriz[0].length).toEqual(5);
    });
});  
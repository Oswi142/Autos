import Autito from "./autito";

const form=document.querySelector("#autito-form");
const comandos=document.querySelector("#comandos-input")
const div=document.querySelector("#pos-final");
let autito=new Autito(0,0,"N");

form.addEventListener("submit", (event) => 
{
  event.preventDefault();
  const command = comandos.value;
  div.innerHTML = "<p>" + autito.ejecutar(command) + "</p>";
});

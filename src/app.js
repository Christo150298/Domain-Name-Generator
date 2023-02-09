import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function generadorAleatorio(param1, param2, param3) {
    for (let a = 0; a < param1.length; a++) {
      for (let b = 0; b < param2.length; b++) {
        for (let c = 0; c < param3.length; c++) {
          let nuevoNombre = document.createTextNode(
            param1[a] + param2[b] + param3[c] + ".com"
          );
          let lista = document.querySelector("#listaNombresDominios");
          let elemento = document.createElement("div");
          elemento.className = "alert alert-dark";
          lista.appendChild(elemento);
          elemento.appendChild(nuevoNombre);
        }
      }
    }
  }
  document.querySelector("#boton").addEventListener("click", () => {
    generadorAleatorio(pronoun, adj, noun);
    document.querySelector("#boton").style.display = "none";
  });
};

"use strict";
const buscando = document.getElementById("buscando");
const inputBuscar = document.getElementById("input_buscar");
const listado = document.getElementById("listPrice");
const tem = document.getElementById("template").content;
//const fragment = document.createDocumentFragment();
const fragment = new DocumentFragment();
buscando.addEventListener("click", (e) => {
  if (input_buscar.classList.contains("buscar0culto")) {
    input_buscar.classList.remove("buscar0culto");
    input_buscar.classList.add("buscarVisible");
  } else if (input_buscar.classList.contains("buscarVisible")) {
    input_buscar.classList.remove("buscarVisible");
    input_buscar.classList.add("buscar0culto");
  }
});

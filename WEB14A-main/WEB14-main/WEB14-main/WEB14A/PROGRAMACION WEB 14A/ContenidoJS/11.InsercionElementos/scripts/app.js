'use strict';
//Creacionb de elementos 
const seccion = document.createElement('section');
//asignacion de atributos a elementos
seccion.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non ipsam cum, vel est id beatae voluptate a velit iste accusamus ad at omnis ipsa sequi quisquam saepe aspernatur amet. Maiores, at laborum non iste culpa pariatur in numquam eius iure incidunt, tenetur similique sint, corrupti eos? Impedit tempora unde exercitationem assumenda, a rerum? Voluptate quibusdam est ipsa? Impedit, optio";
seccion.id = "seccion3";
seccion.setAttribute("name","seccion3");
seccion.className = "seccion3";
seccion.style="color:white; font-size:26px";
//insertar el elemento en el dom
document.body.appendChild(seccion);
 const seccion1 = document.getElementById('sec1');
 seccion1.appendChild(seccion);
seccion.innerHTML = "<p><strong>Hola me cambiaron</strong></p>";        //renderiza las etiquetas
seccion.textContent ="<p><strong>Hola me cambiaron</strong></p>";       //muestra solo texto, no etuiquetas 
seccion.innerHTML = "<p><strong><i>Hola </i> me cambiaron</strong></p>";

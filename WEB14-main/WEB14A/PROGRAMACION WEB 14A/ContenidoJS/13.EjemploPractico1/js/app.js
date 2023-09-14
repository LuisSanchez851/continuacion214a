"use strict";
    const envio = document.getElementById("enviar"); 
    const listaNotas = document.getElementById("lista_notas");
    let btnPromedio;
btnPromedio = document.createElement("button"); 
btnPromedio.type = "button";
btnPromedio.textContent = "Promediar";
envio.addEventListener("click", () => { 
    let cantNotas = document.getElementById("nota").value;
    cantNotas = parseInt(cantNotas); if (cantNotas >= 2 && cantNotas <= 10) {
    for (let i = 0; i < cantNotas; i++) {
        const div = document.createElement("div");
        const input = document.createElement("input");
        input.setAttribute("type", "number");
        input.id = "valor_nota"; 
        input.min = 0;
        input.max = 5;
        input.step= 0.1; 
        div.appendChild(input);
        listaNotas.appendChild(div);
} 
listaNotas.appendChild(btnPromedio);
}
});
btnPromedio.onclick= function () {
    let arrayInput = document.querySelectorAll("#valor_nota");
    let promedio = 0;
    arrayInput.forEach((e) => { 
        if (parseFloat(e.value)) {
            promedio += parseFloat(e.value); 
        }

});
    promedio = promedio / arrayInput.length; 
    alert(`El promedio es:  `+promedio);
};
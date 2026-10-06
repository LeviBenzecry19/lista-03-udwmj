// Calcula a área de um círculo: A = π * raio²
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const raio = parseFloat(document.getElementById("raio").value);

    if (isNaN(raio) || raio < 0) {
        resultado.textContent = "Informe um raio válido.";
        return;
    }

    const area = Math.PI * Math.pow(raio, 2);

    resultado.textContent = "Área do círculo: " + area.toFixed(2);
});

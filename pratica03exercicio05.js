// Calcula o volume de uma esfera: V = 4/3 * π * raio³
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const raio = parseFloat(document.getElementById("raio").value);

    if (isNaN(raio) || raio < 0) {
        resultado.textContent = "Informe um raio válido.";
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

    resultado.textContent = "Volume da esfera: " + volume.toFixed(2);
});

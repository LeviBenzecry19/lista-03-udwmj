// Calcula o montante de juros compostos: M = C * (1 + i)^t
// A taxa (i) e o prazo (t) devem estar na mesma unidade de tempo.
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const capital = parseFloat(document.getElementById("capital").value);
    const taxa = parseFloat(document.getElementById("taxa").value) / 100;
    const tempo = parseFloat(document.getElementById("tempo").value);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        resultado.textContent = "Preencha todos os campos corretamente.";
        return;
    }

    const montante = capital * Math.pow(1 + taxa, tempo);

    resultado.textContent = "Montante: " + montante.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
});

// Altera o texto de um parágrafo ao clicar no botão
function alterarTexto() {
    var p = document.getElementById("texto-curiosidade");
    p.textContent = "A Pixar começou como uma divisão de hardware da Lucasfilm antes de se tornar um estúdio de animação!";
    p.style.color = "#7a3030";
    p.style.fontWeight = "bold";
}

// Mostra ou esconde um elemento
function alternarCuriosidade() {
    var caixa = document.getElementById("caixa-extra");
    if (caixa.style.display === "none" || caixa.style.display === "") {
        caixa.style.display = "block";
    } else {
        caixa.style.display = "none";
    }
}

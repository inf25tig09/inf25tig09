// Carrega o documento XML e constrói uma tabela HTML a partir dos dados
function carregarXML() {
    var pedido = new XMLHttpRequest();

    pedido.onreadystatechange = function () {
        if (pedido.readyState === 4) {
            if (pedido.status === 200 && pedido.responseXML) {
                mostrarTabela(pedido.responseXML);
            } else {
                mostrarErro();
            }
        }
    };

    pedido.open("GET", "xml/animacao.xml", true);
    pedido.send();
}

function mostrarTabela(xml) {
    var filmes = xml.getElementsByTagName("filme");
    var corpo = document.getElementById("corpo-tabela-xml");
    corpo.innerHTML = "";

    for (var i = 0; i < filmes.length; i++) {
        var titulo = filmes[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
        var estudio = filmes[i].getElementsByTagName("estudio")[0].childNodes[0].nodeValue;
        var ano = filmes[i].getElementsByTagName("ano")[0].childNodes[0].nodeValue;
        var tecnica = filmes[i].getElementsByTagName("tecnica")[0].childNodes[0].nodeValue;

        var linha = "<tr>";
        linha += "<td>" + titulo + "</td>";
        linha += "<td>" + estudio + "</td>";
        linha += "<td>" + ano + "</td>";
        linha += "<td>" + tecnica + "</td>";
        linha += "</tr>";

        corpo.innerHTML += linha;
    }
}

function mostrarErro() {
    var corpo = document.getElementById("corpo-tabela-xml");
    corpo.innerHTML = "<tr><td colspan='4'>Não foi possível carregar o XML. " +
        "Abre a página através de um servidor (Netlify ou http://localhost), " +
        "não diretamente com file://.</td></tr>";
}

// Carrega automaticamente quando a página abre
window.onload = carregarXML;

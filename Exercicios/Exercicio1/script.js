const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var largura = parseFloat(document.getElementById("largura").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var valorMetro = parseFloat(document.getElementById("valorMetro").value);

    var area = largura * comprimento;
    var preco = area * valorMetro;    

    document.getElementById("area").innerHTML = "A área do terreno = " + area.toFixed(2);
    document.getElementById("preco").innerHTML = "Preço do terreno = " + preco.toFixed(2);
});
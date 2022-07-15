const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var largura = document.getElementById("largura").value;
    var comprimento = document.getElementById("comprimento").value;
    var valorMetro = document.getElementById("valorMetro").value;

    var area = largura * comprimento;
    var preco = area * valorMetro;    

    mostra = document.getElementById("area").innerHTML = "A área do terreno = " + area.toFixed(2);
    mostra2 = document.getElementById("preco").innerHTML = "Preço do terreno = " + preco.toFixed(2);
});
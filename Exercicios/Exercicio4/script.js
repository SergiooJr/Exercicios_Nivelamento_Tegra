const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var preco = parseFloat(document.getElementById("preco").value);
    var qnt = parseInt(document.getElementById("qnt").value);
    var valor = parseFloat(document.getElementById("valor").value);

    var total = preco * qnt;
    var troco = valor - total;    

    document.getElementById("troco").innerHTML = "TROCO = " + troco.toFixed(2);
});
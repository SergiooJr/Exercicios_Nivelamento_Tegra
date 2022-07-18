const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var preco = parseFloat(document.getElementById("preco").value);
    var qnt = parseInt(document.getElementById("qnt").value);
    var valor = parseFloat(document.getElementById("valor").value);

    var total = preco * qnt;
    var troco = valor - total;    

    if(total<=valor){
        document.getElementById("troco").innerHTML = "TROCO = " + troco.toFixed(2);
    }
    else{
        var falta = total - valor
        document.getElementById("troco").innerHTML = "DINHEIRO INSULFICIENTE. FALTAM " + falta.toFixed(2) + " REAIS";
    }
});
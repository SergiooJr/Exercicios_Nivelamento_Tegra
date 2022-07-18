const btn = document.querySelector("#btn");
btn.addEventListener("click",
function (e){
    e.preventDefault();

    var min = parseInt(document.getElementById("minutos").value);
    var cinquenta = 50;

    if(min<=100){
        document.getElementById("valor").innerHTML = "Valor a pagar: R$" + cinquenta.toFixed(2); 
    }
    else{
        var excesso = min - 100;
        var total = 50 + excesso*2
        document.getElementById("valor").innerHTML = "Valor a pagar: R$" + total.toFixed(2);
    }
});
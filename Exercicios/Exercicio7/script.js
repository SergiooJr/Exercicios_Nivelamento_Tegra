const btn = document.querySelector("#btn");
btn.addEventListener("click",
function (e){
    e.preventDefault();

    var distP = document.getElementById("distP").value;
    var cGasto = document.getElementById("cGasto").value;

    var total = distP / cGasto;

    document.getElementById("resultado").innerHTML = "Consumo médio = " + total.toFixed(3);
});
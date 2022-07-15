const btn = document.querySelector("#btn");
btn.addEventListener("click",
function (e){
    e.preventDefault();

    var nome = document.getElementById("nome").value;
    var vHora = document.getElementById("vHora").value;
    var qntHrs = document.getElementById("qntHrs").value;

    var total = vHora * qntHrs;

    document.getElementById("resultado").innerHTML = "O pagamento para " + nome + " deve ser " + total.toFixed(2);
});
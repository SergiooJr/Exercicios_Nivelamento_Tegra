const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var n = parseInt(document.getElementById("x").value);
    var nF = parseInt(document.getElementById("numF").value);
    var total = 0;
    var i = 0;

    for(i = nI; i<=nF; i++){
        total = total + i;
    }
    document.getElementById("resul").innerHTML = "Resultado: " + total;
});
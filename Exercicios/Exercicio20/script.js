const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var nI = parseInt(document.getElementById("numI").value);
    var nF = parseInt(document.getElementById("numF").value);
    var total = 0, i = 0;

    for(i = nI; i<=nF; i++){
        total = total + i;
    }
    document.getElementById("resul").innerHTML = "Resultado: " + total;
});
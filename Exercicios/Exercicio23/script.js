const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var num = parseFloat(document.getElementById("x").value);
    var num2 = parseFloat(document.getElementById("y").value);
    var soma = 0;

    if(num%2==1){
        num = num + 1;
    }
    for(var i = num; i<num2; i++){
        if(i%2==1){
            var soma = soma + i;
        }
    }
    document.getElementById("resul").innerHTML = "SOMA DOS ÍMPARES = " + soma;
});
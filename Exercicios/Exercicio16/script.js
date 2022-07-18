const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var dist1 = document.getElementById("dist").value;
    var dist2 = document.getElementById("dist2").value;
    var dist3 = document.getElementById("dist3").value;

    if(dist1 > dist2 && dist1 > dist3){
        document.getElementById("resul").innerHTML = "MAIOR DISTÂNCIA = " + dist1;
    }
    else if(dist2 > dist1 && dist2 > dist3){
        document.getElementById("resul").innerHTML = "MAIOR DISTÂNCIA = " + dist2;
    }
    else if(dist3 > dist1 && dist3 > dist2){
        document.getElementById("resul").innerHTML = "MAIOR DISTÂNCIA = " + dist3;
    }
    else if(dist1 == dist2 && dist1 == dist3){
        document.getElementById("resul").innerHTML = "TODOS AS DISTÂNCIAS SÃO IGUAIS";
    }
    else if(dist1 == dist2 && dist1 < 3){
        document.getElementById("resul").innerHTML = "MENOR = " + dist1 + " (A 1° e a 2° distância são iguais)";
    }
    else if(dist2 == dist3 && dist2 < dist1){
        document.getElementById("resul").innerHTML = "MENOR = " + dist2 + " (A 2° e a 3° distância são iguais)";
    }else{
        document.getElementById("resul").innerHTML = "MENOR = " + dist3 + " (A 1° e a 3° distância são iguais)";
    }
});

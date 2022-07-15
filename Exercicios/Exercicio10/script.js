const btn = document.querySelector("#btn");
btn.addEventListener("click",
function (e){
    e.preventDefault();

    var valor = parseInt(document.getElementById("valor").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var valor3 = parseInt(document.getElementById("valor3").value);

    if(valor < valor2 && valor < valor3){
        document.getElementById("resul").innerHTML = "MENOR = " + valor;
    }
    else if(valor == valor2 && valor == valor3){
        document.getElementById("resul").innerHTML = "TODOS OS VALORES SÃO IGUAIS";
    }
    else if(valor2 < valor && valor2 < valor3){
        document.getElementById("resul").innerHTML = "MENOR = " + valor2;
    }
    else if(valor3 < valor && valor3 < valor2){
        document.getElementById("resul").innerHTML = "MENOR = " + valor3;
    }
    else if(valor == valor2 && valor < 3){
        document.getElementById("resul").innerHTML = "MENOR = " + valor + " (O 1° e o 2° valor são iguais)";
    }
    else if(valor2 == valor3 && valor2 < valor){
        document.getElementById("resul").innerHTML = "MENOR = " + valor2 + " (O 2° e o 3° valor são iguais)";
    }else{
        document.getElementById("resul").innerHTML = "MENOR = " + valor3 + " (O 1° e o 3° valor são iguais)";
    }
});
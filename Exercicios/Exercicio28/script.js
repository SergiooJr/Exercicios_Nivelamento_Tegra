const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var val = document.getElementById("val").value;
    var val2 = document.getElementById("val2").value;
    var val3 = document.getElementById("val3").value;
    var val4 = document.getElementById("val4").value;
    var val5 = document.getElementById("val5").value;

    for(i = 0; i<5; i++){
        if(i == 0){
            valor = val;
            maior = valor;
            menor = valor;
        }
        else if(i == 1){
            valor = val2;
            if(valor>maior){
                maior = valor;
            }
            if(valor<menor){
                menor = valor;
            }
        }
        else if(i == 2){
            valor = val3;
            if(valor>maior){
                maior = valor;
            }
            if(valor<menor){
                menor = valor;
            }
        }
        else if(i == 3){
            valor = val4;
            if(valor>maior){
                maior = valor;
            }
            if(valor<menor){
                menor = valor;
            }
        }
        else if(i == 4){
            valor = val5;
            if(valor>maior){
                maior = valor;
            }
            if(valor<menor){
                menor = valor;
            }
        }
    }
    document.getElementById("resul").innerHTML = "MAIOR = " + maior + "<br>MENOR = " + menor;
});

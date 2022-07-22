const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    const signos = ["", "Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"];
    var dataNasc = document.getElementById("dataNasc").value;
    var dia = dataNasc.split("/")[0].replace(/["0"]/g, "");
    var mes = dataNasc.split("/")[1].replace(/["0"]/g, "");
    if(dia>=21 && dia<=31 && mes == "3" || dia<=20 && mes == "4"){
        document.getElementById("resul").innerHTML = signos[1];
    }
    else if(dia>=21 && dia<=30 && mes == "4" || dia<=20 && mes == "5"){
        document.getElementById("resul").innerHTML = signos[2];
    }
    else if(dia>=21 && dia<=31 && mes == "5" || dia<=20 && mes == "6"){
        document.getElementById("resul").innerHTML = signos[3];
    }
    else if(dia>=21 && dia<=30 && mes == "6" || dia<=22 && mes == "7"){
        document.getElementById("resul").innerHTML = signos[4];
    }
    else if(dia>=23 && dia<=31 && mes == "7" || dia<=22 && mes == "8"){
        document.getElementById("resul").innerHTML = signos[5];
    }
    else if(dia>=23 && dia<=31 && mes == "8" || dia<=22 && mes == "9"){
        document.getElementById("resul").innerHTML = signos[6];
    }
    else if(dia>=23 && dia<=30 && mes == "9" || dia<=22 && mes == "10"){
        document.getElementById("resul").innerHTML = signos[7];
    }
    else if(dia>=23 && dia<=31 && mes == "10" || dia<=21 && mes == "11"){
        document.getElementById("resul").innerHTML = signos[8];
    }
    else if(dia>=22 && dia<=30 && mes == "11" || dia<=21 && mes == "12"){
        document.getElementById("resul").innerHTML = signos[9];
    }
    else if(dia>=22 && dia<=31 && mes == "12" || dia<=20 && mes == "1"){
        document.getElementById("resul").innerHTML = signos[10];
    }
    else if(dia>=21 && dia<=31 && mes == "1" || dia<=18 && mes == "2"){
        document.getElementById("resul").innerHTML = signos[11];
    }
    else if(dia>=19 && dia<=28 && mes == "2" || dia<=20 && mes == "3"){
        document.getElementById("resul").innerHTML = signos[12];
    }
    else{
        document.getElementById("resul").innerHTML = "Essa data não existe!";
    }
    
    
});
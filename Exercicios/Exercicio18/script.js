const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var temp = parseFloat(document.getElementById("temp").value);
    var opc =  document.getElementById("opc").value.toUpperCase();
    
    if(opc == "F"){
        var valor = (temp-32)/1.8;
        document.getElementById("resul").innerHTML = "Temperatura equivalente em Celsius: " + valor.toFixed(2);
    }
    if(opc == "C"){
        var valor = temp*1.8+32;
        document.getElementById("resul").innerHTML = "Temperatura equivalente em Fahrenheit: " + valor.toFixed(2);
    }
});
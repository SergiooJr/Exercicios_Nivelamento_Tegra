const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var medSangue = parseFloat(document.getElementById("medSangue").value);

    if(medSangue < 101){
        document.getElementById("classificacao").innerHTML = "Normal";
    }
    else if(medSangue<141){
        document.getElementById("classificacao").innerHTML = "Elevado";
    }
    else{
        document.getElementById("classificacao").innerHTML = "Diabetes";
    }
});
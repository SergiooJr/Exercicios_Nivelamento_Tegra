const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;

    var area = base * altura;
    var perimetro = base*2 + altura*2; 
    var diagonal = (base**2 + altura**2)**0.5;
    /*OU
    var diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));
    */    

    mostra = document.getElementById("area").innerHTML = "ÁREA = " + area.toFixed(4);
    mostra2 = document.getElementById("perimetro").innerHTML = "PERÍMETRO = " + perimetro.toFixed(4);
    mostra3 = document.getElementById("diagonal").innerHTML = "DIAGONAL = " + diagonal.toFixed(4);
});
const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var raio = document.getElementById("raio").value;

    var pi = 3.14159
    var area = pi * raio**2;
    /*OU
    var area = pi * Math.pow(raio, 2));
    */     

    document.getElementById("resultado").innerHTML = "ÁREA = " + area.toFixed(3);
});
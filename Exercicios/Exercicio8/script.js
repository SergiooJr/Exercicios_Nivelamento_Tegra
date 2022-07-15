const btn = document.querySelector("#btn");
btn.addEventListener("click",
function (e){
    e.preventDefault();

    var medA = parseFloat(document.getElementById("medA").value);
    var medB = parseFloat(document.getElementById("medB").value);
    var medC = parseFloat(document.getElementById("medC").value);

    var areaQ = medA**2;
    var areaTri = (medA * medB)/2;
    var areaTra = ((medA + medB)*medC)/2;

    document.getElementById("areaQ").innerHTML = "ÁREA DO QUADRADO = " + areaQ.toFixed(4);
    document.getElementById("areaTri").innerHTML = "ÁREA DO TRIÂNGULO = " + areaTri.toFixed(4);
    document.getElementById("areaTra").innerHTML = "ÁREA DO TRAPÉZIO = " + areaTra.toFixed(4);
});
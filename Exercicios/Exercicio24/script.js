const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var num = parseFloat(document.getElementById("num").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var num5 = parseFloat(document.getElementById("num5").value);
    
    const a = [num, num2, num3, num4, num5];
    const ordenado = a.sort();

    document.getElementById("resul").innerHTML = "Ordenados = " + ordenado;
});
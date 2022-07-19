var resul = document.querySelector("div.resul");
const calcular = document.querySelector("button");

calcular.addEventListener("click", () => {
    var n = parseInt(document.getElementById("n").value);
    resul.innerHTML = "";
    for(var i=1; i<=10;i++){
        var calc = n + " x " + i + " = " + n*i;
        var resultado = document.createElement("p");
        resultado.innerHTML = calc;
        resul.appendChild(resultado);
    }
});
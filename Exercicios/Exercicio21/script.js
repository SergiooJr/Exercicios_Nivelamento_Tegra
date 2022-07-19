var resul = document.querySelector("div.resul")
const calcular = document.querySelector("button")

calcular.addEventListener("click", () => {
    var n = parseInt(document.getElementById("x").value);

    for(var i=1; i<=n;i++){
        if(i%2==0){
            var resultado = document.createElement("p")
            resultado.innerHTML = i
            resul.appendChild(resultado)
        }
    }
});
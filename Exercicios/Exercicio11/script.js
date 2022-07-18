const btn = document.querySelector("#btn");
btn.addEventListener("click",
function (e){
    e.preventDefault();

    var nota1 = parseFloat(document.getElementById("nota").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    var media = nota1 + nota2;

    document.getElementById("resul").innerHTML = "NOTA FINAL = " + media.toFixed(1);

    if(media<60){
        document.getElementById("resul2").innerHTML = "REPROVADO";
    }
    else{
        document.getElementById("resul2").innerHTML = "APROVADO";
    }
});
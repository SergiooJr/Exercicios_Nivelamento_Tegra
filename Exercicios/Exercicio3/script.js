const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var nome1= document.getElementById("nome1").value;
    var idade1 = parseInt(document.getElementById("idade1").value);
    var nome2 = document.getElementById("nome2").value;
    var idade2 = parseInt(document.getElementById("idade2").value);

    var media = (idade1 + idade2)/2;   
    
    document.getElementById("resultado").innerHTML = "A idade média de " + nome1 + " e " + nome2 + " é de " + media.toFixed(1);
});
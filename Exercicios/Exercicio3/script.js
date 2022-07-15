const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var nome1= document.getElementById("nome1").value;
    var idade1 = document.getElementById("idade1").value;
    var nome2 = document.getElementById("nome2").value;
    var idade2 = document.getElementById("idade2").value;

    var ida1int = parseInt(idade1); 
    var ida2int = parseInt(idade2); 
    var media = (ida1int + ida2int)/2;   
    
    document.getElementById("resultado").innerHTML = "A idade média de " + nome1 + " e " + nome2 + " é de " + media.toFixed(1);
});
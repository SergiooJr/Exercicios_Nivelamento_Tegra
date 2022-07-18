const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var num = parseInt(document.getElementById("num").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if(num>num2){
        if(num%num2==0){
            document.getElementById("resul").innerHTML = "São múltiplos."
        }
        else{
            document.getElementById("resul").innerHTML = "Não são múltiplos."
        }
    }
    else if(num<num2){
        if(num2%num==0){
            document.getElementById("resul").innerHTML = "São múltiplos."
        }
        else{
            document.getElementById("resul").innerHTML = "Não são múltiplos."
        }
    }
    else{
        document.getElementById("resul").innerHTML = "Os números digitados são iguais"
    }
});
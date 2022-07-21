const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var n = parseInt(document.getElementById("num").value);
    var d = 0, u = 0;
    const unidade = ["", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez", "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove", "Vinte"],
    dezena = ["", "", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
    if(n>= 0 && n<=99){
        if(n>= 0 && n <=20){
            if(n == 0){
                document.getElementById("result").innerHTML = "Zero";
            }
            document.getElementById("result").innerHTML = unidade[n];
        }
        else{
            var d = Math.floor(n/10);
            console.log(d);
            var u = n % 10;
            console.log(u)
            document.getElementById("result").innerHTML = dezena[d] + " e " + unidade[u];
        }
    }
    else{
        document.getElementById("result").innerHTML = "Digite um número com até dois algarismos!";
    }
});
const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();    
    var cnpj = document.getElementById("cnpj").value;
    function valida_cnpj(cnpj){
        let numeros = cnpj.split("-")[0].replace(/[.|\/]/g, "");
        let digitos = cnpj.split("-")[1];
        if(getPrimeiroDigito(numeros) != digitos[0]){
            return "Inválido";
        }
        if(getSegundoDigito(numeros+""+digitos[0]) != digitos[1]){
            return "Inválido";
        }
        return "Válido";
    }

    function getPrimeiroDigito(numeros){
        let peso = 2;
        let resultado = 0;
        for(let i = numeros.length-1; i>=0; i--){
            resultado += numeros[i] * peso;
            peso = (peso>=9 ? 2 : peso+1) // se o peso for maior igual a nove, retorna dois, senão peso ++
        }
        modulo = resultado % 11;
        resultado = (modulo < 2 ? 0 : 11 - modulo);
        return resultado;
    }
    function getSegundoDigito(numeros){
        let peso = 2;
        let resultado = 0;
        for(let i = numeros.length-1; i>=0; i--){
            resultado += numeros[i] * peso;
            peso = (peso>=9 ? 2 : peso+1);
        }
        modulo = resultado % 11;
        resultado = (modulo < 2 ? 0 : 11 - modulo);
        return resultado;
    }
    document.getElementById("result").innerHTML = valida_cnpj(cnpj);
});
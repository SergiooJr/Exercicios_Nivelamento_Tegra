const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var sal = parseFloat(document.getElementById("sal").value);
    var aumento, salNov, porcent = 0;

    if(sal<1000){
        porcent = 20;
        aumento = sal*porcent/100;
        salNov = sal+aumento;
        document.getElementById("resul").innerHTML = "Novo salário = R$" + salNov.toFixed(2) + "<br>Aumento: R$" + aumento.toFixed(2) + "<br>Porcentagem: 20%";
    }
    else if(sal<3000){
        porcent = 15;
        aumento = sal*porcent/100;
        salNov = sal+aumento;
        document.getElementById("resul").innerHTML = "Novo salário = R$" + salNov.toFixed(2) + "<br>Aumento: R$" + aumento.toFixed(2) + "<br>Porcentagem: " + porcent + "%";
    }
    else if(sal<8000){
        porcent = 10;
        aumento = sal*porcent/100;
        salNov = sal+aumento;
        document.getElementById("resul").innerHTML = "Novo salário = R$" + salNov.toFixed(2) + "<br>Aumento: R$" + aumento.toFixed(2) + "<br>Porcentagem: " + porcent + "%";
    }
    else{
        porcent = 05;
        aumento = sal*porcent/100;
        salNov = sal+aumento;
        document.getElementById("resul").innerHTML = "Novo salário = R$" + salNov.toFixed(2) + "<br>Aumento: R$" + aumento.toFixed(2) + "<br>Porcentagem: " + porcent + "%";
    }
});
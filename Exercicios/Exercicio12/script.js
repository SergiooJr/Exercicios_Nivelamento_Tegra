const btn = document.querySelector("#btn");
btn.addEventListener("click",
function (e){
    e.preventDefault();

    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    var delta = b * b - 4 * a * c;

    if(delta<0){
        document.getElementById("x1").innerHTML = "Esta equação não possui raízes reais"
    }
    else if(a==0){
        document.getElementById("x1").innerHTML = "O valor de a, deve ser diferente de 0";
    }
    else{
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("x1").innerHTML = "X1 = " + x1.toFixed(4);
        document.getElementById("x2").innerHTML = "X2 = " + x2.toFixed(4);
    }
});
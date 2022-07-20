const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var palavra = document.getElementById("palavra").value;
    const testes = [palavra];
    const ignoreSpaces = str => str.split(' ').join('');
    const checkPalindrome = str => ignoreSpaces(str) === ignoreSpaces(str.split('').reverse().join(''));
    const resultados = testes.map(checkPalindrome);
    if (resultados == true){
        document.getElementById("result").innerHTML = "É palíndromo.";
    }
    else{
        document.getElementById("result").innerHTML = "Não é palíndromo.";
    }
});
const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    const vogais = ["a", "e", "i", "o", "u"]
    const consoantes = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "P", "q", "r", "s", "t", "v", "w", "x", "z"]

    function contaVog(str) {
        let count = 0;
    
        for (let letra of str.toLowerCase()) {
            if (vogais.includes(letra)) {
                count++;
            }
        }
        return count
    }
    function contaCon(str) {
        let count = 0;
    
        for (let letra of str.toLowerCase()) {
            if (consoantes.includes(letra)) {
                count++;
            }
        }
        return count
    }
    
    
    const string = document.getElementById("palavra").value;
    
    const result = contaVog(string);
    const result2 = contaCon(string);
    
    document.getElementById("v").innerHTML = "VOGAIS: " + result;
    document.getElementById("c").innerHTML = "CONSOANTES: " + result2;
});
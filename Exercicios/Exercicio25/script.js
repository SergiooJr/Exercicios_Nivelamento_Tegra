const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.preventDefault();
    var dataNasc = String(document.getElementById("dataNasc").value);
    const dm = [dataNasc];
    var arr = Array.from(dm);
    console.log("dm: " + dm)
    var antes = dm.slice(0, 2);
    console.log(antes);
    for(var i = 0; i<antes.length; i++){
        if(antes[i] == "3"){
            console.log("test")
        }
    } 
});
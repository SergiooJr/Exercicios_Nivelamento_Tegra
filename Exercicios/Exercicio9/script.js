const btn = document.querySelector("#btn");
btn.addEventListener("click",
function (e){
    e.preventDefault();

    var seg = parseInt(document.getElementById("s").value);
    var hr = parseInt(seg/3600);
    var resto = parseInt(seg%3600);
    var min = parseInt(resto/60);
    var s = parseInt(resto%60);

    document.getElementById("resul").innerHTML = hr + ":" + min + ":" + s;
});
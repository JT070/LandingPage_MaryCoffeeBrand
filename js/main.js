btnLogo = document.getElementById("logotipo");
fondo = document.getElementById("landing-header");

btnLogo.addEventListener("mouseover", desenfocar);
fondo.addEventListener("mouseover", enfocar);

function desenfocar () {
    fondo.style.filter = "blur(5px)";
}

function enfocar () {
    fondo.style.filter = "blur(0px)";
}
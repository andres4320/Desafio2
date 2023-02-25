
function cambio() {
    let imagen = document.getElementById("img");

    if (imagen.classList == "img-pokemon active") {
        imagen.classList.remove('active');
    }else{
        imagen.classList.add('active');
    }

}

function verificar() {
    let sticker1 = document.getElementById("sticker1").value;
    let sticker2 = document.getElementById("sticker2").value;
    let sticker3 = document.getElementById("sticker3").value;
    sticker1 = parseInt(sticker1);
    sticker2 = parseInt(sticker2);
    sticker3 = parseInt(sticker3);
    let total_sticker = sticker1 + sticker2 + sticker3;

    if (total_sticker > 10) {
        let text = document.getElementById("eje2").innerHTML = "Llevas demasiados Stickers.";
    }else if(total_sticker === 0){
        let text = document.getElementById("eje2").innerHTML = "Por favor, selecciona algún Sticker.";
    }else{
        let text = document.getElementById("eje2").innerHTML = "Llevas " + total_sticker + " Stickers.";
    }
    
}

function ingresar() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let pass = num1 + num2 + num3;

    if (pass === "911") {
        let text = document.getElementById("2.3").innerHTML = "Password 1, Correcto";
    }else if (pass === "714") {
        let text = document.getElementById("2.3").innerHTML = "Password 2, Correcto";
    } else {
        let text = document.getElementById("2.3").innerHTML = "Password Incorrecto";
    }
}
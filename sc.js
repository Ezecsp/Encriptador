function encrypt(){
    var oracion = document.getElementById("encriptar").value.toLowerCase();
    
    var textoEncriptado = oracion.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/ig, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("desencriptar").innerHTML = textoEncriptado;
}

function desencrypt(){
    alert("Estas seguro de lo que vas a hacer??");
    var oracion = document.getElementById("encriptar").value.toLowerCase();
    
    var textoEncriptado = oracion.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("desencriptar").innerHTML = textoEncriptado;
}

function copiar(){
    var contenido = document.querySelector("#desencriptar");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado");
}

var btn = document.querySelector("#btnencriptar");
btn.onclick = encrypt;

var btn1 = document.querySelector("#btndesencriptar");
btn1.onclick = desencrypt;

var btn2 = document.querySelector("#btncopiar");
btn2.onclick = copiar;
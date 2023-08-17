'use strict';





//Función que encripta el texto que ingreso el usuario
function encriptar(){
    var textoIn = document.getElementById("textBoxIn").value; //guarda en una variable el texto que ingresó el usuario mediante el ID
    var resultBox = document.getElementById("divResul");
    //recomendación siguiente linea Alura
    //document.getElementById("divResul").style.display = "none";
    resultBox.textContent = textoIn+" Encriptado";
}

function vaciarBox(){
    //Limpiamos los campos de entrada
    var textBoxIn = document.getElementById("textBoxIn");
    textBoxIn.value="";
    var textBoxResu = document.getElementById("divResul");
    textBoxResu.textContent="";
    //divResul
}

//Función que obtiene el valor que le pasa el usuario para desencriptar
function desencriptar() {
    var  textoIn = document.getElementById("textBoxIn").value; //guarda en una variable el texto que ingresó el usuario mediante el ID
    var resultBox = document.getElementById("divResul");
    //recomendación siguiente linea Alura
    //document.getElementById("divResul").style.display = "none";
    resultBox.textContent = textoIn+" Desencriptado";
}
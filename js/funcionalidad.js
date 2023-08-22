'use strict';

//Función que encripta el texto que ingreso el usuario
function encriptar(){
    var textoIn = document.getElementById("textBoxIn").value; //guarda en una variable el texto que ingresó el usuario mediante el ID
    var resultBox = document.getElementById("divResul");
    var resultado="";
    resultBox.classList.add("fondoColor");
    resultBox.classList.remove("fondoImagen");
    for(let i=0;i<textoIn.length;i++){
        if (textoIn[i] == "a") {
            resultado += "ai";
        }
        else if(textoIn[i] == "e"){
            resultado+="enter" ;
        }
        else if(textoIn[i] == "i"){
            resultado+= "imes";
        }
        else if(textoIn[i] == "o"){
            resultado+="ober";
        }
        else if(textoIn[i] == "u"){
            resultado+="ufat";
        }
        else{
            resultado+=textoIn[i];
        }
    }
    resultBox.textContent = resultado;
}

//Función que obtiene el valor que le pasa el usuario para desencriptar
function desencriptar() {
    var  textoIn = document.getElementById("textBoxIn").value; //guarda en una variable el texto que ingresó el usuario mediante el ID
    var resultBox = document.getElementById("divResul");
    resultBox.classList.add("fondoColor");
    resultBox.classList.remove("fondoImagen");
    resultBox.textContent = textoIn+" Desencriptado";
}

function vaciarBox(){
    //Limpiamos los campos de entrada
    var textBoxIn = document.getElementById("textBoxIn");
    textBoxIn.value="";
    var textBoxResu = document.getElementById("divResul");
    textBoxResu.textContent="";
    textBoxResu.classList.add("fondoImagen");
    textBoxResu.classList.remove("fondoColor");
}

//Función que muestra y oculta el boton que el usuario desea usar
function hidingBtn (btn1Modo, btn2Modo, btnSel1, btnSel2){
    vaciarBox();
    document.getElementById(btnSel1).classList.add("selected");
    document.getElementById(btnSel2).classList.remove("selected");
    document.getElementById(btn1Modo).classList.add("hidden");
    document.getElementById(btn2Modo).classList.remove("hidden");
}
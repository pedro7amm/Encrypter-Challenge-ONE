'use strict';

//Función que encripta el texto que ingreso el usuario
function encriptar(){
    let textoIn = document.getElementById("textBoxIn").value; //guarda en una variable el texto que ingresó el usuario mediante el ID
    let resultBox = document.getElementById("divResul");
    let resultado="";
    resultBox.classList.remove("errorTexto");
    resultBox.classList.add("fondoColor");
    resultBox.classList.remove("fondoImagen");
    if(verificarTexto(textoIn) == true){
        const reemplazos = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        }; 
        resultado=textoIn.replace(/[aeiou]/g, letra => reemplazos[letra] || letra);
        resultBox.classList.add("correctoTexto");
        resultBox.textContent = resultado;
        
    }else{
        resultBox.classList.add("errorTexto");
        resultBox.textContent = "¡Ingresó un caracter no válido!";
    }
    
}

//Función que obtiene el valor que le pasa el usuario para desencriptar
function desencriptar() {
    let  textoIn = document.getElementById("textBoxIn").value; //guarda en una variable el texto que ingresó el usuario mediante el ID
    let resultBox = document.getElementById("divResul");
    let resultado="";
    resultBox.classList.add("fondoColor");
    resultBox.classList.remove("fondoImagen");
    const reemplazos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    const reemplazoReguExpre = new RegExp(Object.keys(reemplazos).join('|'), 'g');
    resultado=textoIn.replace(reemplazoReguExpre, match => reemplazos[match]);
    resultBox.textContent =resultado;
}

function vaciarBox(){
    //Limpiamos los campos de entrada
    let textBoxIn = document.getElementById("textBoxIn");
    textBoxIn.value="";
    let textBoxResu = document.getElementById("divResul");
    textBoxResu.textContent="";
    textBoxResu.classList.add("fondoImagen");
    textBoxResu.classList.remove("fondoColor");
}

function copiarPortaPapeles(){
    let textToCopy = document.getElementById("divResul").textContent;
    document.getElementById("btnPegar").classList.remove("hidden");
    navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
            mostrarNoti("Texto copiado al portapapeles");
        })
        .catch((error) => {
            console.error("Error al copiar el texto: ", error);
            mostrarNoti("Error al copiar el texto");
        });
}

//Función que muestra y oculta el boton que el usuario desea usar
function hidingBtn (btn1Modo, btn2Modo, btnSel1, btnSel2){
    vaciarBox();
    document.getElementById(btnSel1).classList.add("selected");
    document.getElementById(btnSel2).classList.remove("selected");
    document.getElementById(btn1Modo).classList.add("hidden");
    document.getElementById(btn2Modo).classList.remove("hidden");
}

function pegarDelPortaPapeles(){

  //Usamos el objeto navigator.clipboard para acceder al portapapeles
  navigator.clipboard
    .readText()
    .then((textoPortaPapeles) => {
      document.getElementById("textBoxIn").value = textoPortaPapeles;
      mostrarNoti("Texto pegado correctamente");
    })
    .catch((error) => {
      console.log("Error al pegar el texto: " + error);
      mostrarNoti("Error al pegar el texto");
    });
}

function mostrarNoti(msg){
    let notificacion = document.getElementById("divNotis");
    notificacion.textContent=msg;
    notificacion.classList.remove('hidden');
    setTimeout(function() {
      notificacion.classList.add('hidden');
    }, 1500);
}

function verificarTexto(textoPara){
    const text = textoPara;
    const regex = /^[a-z0-9]+$/;
    var validacion=true;

    if (!regex.test(text)) {
        validacion=false;
    } 
    console.log(validacion);
    return validacion;
}



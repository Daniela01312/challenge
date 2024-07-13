function funcionEncriptar() {
    document.getElementById("encriptacion").style.visibility = "hidden";
    document.getElementById("encriptacion2").style.visibility = "hidden";
    document.getElementById("encriptacion3").style.visibility = "hidden";
    document.getElementById("elemento_oculto").style.visibility = "visible";
    document.getElementById("elemento_oculto2").style.visibility = "visible";
  
    let textoUsuario = document.getElementById('encriptar').value;
    let textoEncriptado = "";

    if (!/^[a-zñ\s]+$/.test(textoUsuario)) {
        asignarTextoElemento("#elemento_oculto", "Solo letras minúsculas y sin acentos");
        return; 
    }

    for (let i = 0; i < textoUsuario.length; i++) {
      const letra = textoUsuario[i].toLowerCase(); 
      if (letra === 'a') {
        textoEncriptado += 'ai';
      } else if (letra === 'e') {
        textoEncriptado += 'enter';
      } else if (letra === 'i') {
        textoEncriptado += 'imes';
      } else if (letra === 'o') {
        textoEncriptado += 'ober';
      } else if (letra === 'u') {
        textoEncriptado += 'ufat';
      } else {
        textoEncriptado += letra; 
      }
    }
  
    asignarTextoElemento("#elemento_oculto", textoEncriptado);
}

function funcionDesencriptar() {
    document.getElementById("encriptacion").style.visibility = "hidden";
    document.getElementById("encriptacion2").style.visibility = "hidden";
    document.getElementById("encriptacion3").style.visibility = "hidden";
    document.getElementById("elemento_oculto").style.visibility = "visible";
    document.getElementById("elemento_oculto2").style.visibility = "visible";

    let textoUsuario = document.getElementById('encriptar').value;
    let textoDesencriptado = textoUsuario
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  
    if (!/^[a-zñ\s]+$/.test(textoUsuario)) {
        asignarTextoElemento("#elemento_oculto", "Solo letras minúsculas y sin acentos");
        return; 
    }

    asignarTextoElemento("#elemento_oculto", textoDesencriptado); 
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento + " p");
    if (elementoHTML) {
        elementoHTML.textContent = texto;
    } else {
        alert("No se encontró ningún elemento dentro de " + elemento);
    }
}

function copy() {
    let copyText = document.querySelector("#elemento_oculto p");
    if (copyText) {
        navigator.clipboard.writeText(copyText.textContent)
          .then(() => {
            alert('Texto copiado');
          })
          .catch(err => {
            alert("Error al copiar el texto: ", err);
          });
    } else {
        console.error("No se encontró ningún elemento <p> dentro de #elemento_oculto");
    }
}

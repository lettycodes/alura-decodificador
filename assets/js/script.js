const input = document.querySelector("#input-texto");
const btCriptografar = document.querySelector("#bt-criptografar");
const btDescriptografar = document.querySelector("#bt-descriptografar");
const mensagem = document.querySelector("#mensagem");
const btCopiar = document.querySelector("#bt-copiar");

document.getElementById("div-aparece").style.display = 'none';
inputverificar();

document.getElementById('bt-criptografar').onclick = (e) => {
  e.preventDefault();
  const textoCriptografado = criptografar(input.value.toLowerCase());
  mensagem.value = textoCriptografado;
  input.value = "";
  aparece()
}

document.getElementById('bt-descriptografar').onclick = (e) => {
  e.preventDefault();
  const textoDescriptografado = descriptografar(input.value);
  mensagem.value = textoDescriptografado;
  input.value = "";
  aparece()
}

document.getElementById('bt-copiar').onclick = (e) => {
  e.preventDefault();
  const mensagem = document.querySelector("#mensagem");
  mensagem.select();
  navigator.clipboard.writeText(mensagem.value)
  mensagem.value = "";
}

function criptografar(stringCriptografada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringCriptografada = stringCriptografada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringCriptografada.includes(matrixCode[i][0])) {
      stringCriptografada = stringCriptografada.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
  return stringCriptografada
}

function descriptografar(stringDescriptografada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDescriptografada = stringDescriptografada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringDescriptografada.includes(matrixCode[i][1])) {
      stringDescriptografada = stringDescriptografada.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
  return stringDescriptografada
}

function aparece() {
  document.getElementById("div-desaparece").style.display = 'none';
  document.getElementById("div-aparece").style.display = 'block';
}

function home() {
  document.getElementById("div-aparece").style.display = 'none';
  document.getElementById("div-desaparece").style.display = 'block';
}

function inputverificar() {
  var inputPalavra = document.querySelector("#input-texto");
  inputPalavra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}



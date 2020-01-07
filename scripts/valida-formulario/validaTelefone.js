$(document).ready(function() {
  $("#fixo").mask("(00) 0000-0000");
  $("#celular").mask("(00) 0 0000-0000");
});

function validaTelefone() {
  const fixo = document.getElementById("fixo").value;
  const erroFixo = document.getElementById("fixo-erro");

  const celular = document.getElementById("celular").value;
  const erroCel = document.getElementById("celular-erro");

  if (fixo === "" && celular === "") {
    erroFixo.innerHTML = "Adicionar um telefone ou celular";
    erroFixo.style.display = "block";

    erroCel.innerHTML = "Adicionar um telefone ou celular";
    erroCel.style.display = "block";

    erroForm = true;
  } else {
    erroFixo.innerHTML = "";
    erroFixo.style.display = "";

    erroCel.innerHTML = "";
    erroCel.style.display = "";

    erroForm = false;

    fixo != "" ? validaFixo() : validaCelular();
  }
}

function validaFixo() {
  const fixo = document.getElementById("fixo").value;
  const erroFixo = document.getElementById("fixo-erro");

  if (fixo.length < 14) {
    erroFixo.style.display = "block";
    erroFixo.innerHTML = "Telefone inválido";
    erroForm = true;
  } else {
    erroFixo.style.display = "none";
    erroFixo.innerHTML = "";
    erroForm = false;
  }
}

function validaCelular() {
  const celular = document.getElementById("celular").value;
  const erroCel = document.getElementById("celular-erro");

  if (celular.length < 16) {
    erroCel.style.display = "block";
    erroCel.innerHTML = "Celular inválido";
    erroForm = true;
  } else {
    erroCel.style.display = "none";
    erroCel.innerHTML = "";
    erroForm = false;
  }
}

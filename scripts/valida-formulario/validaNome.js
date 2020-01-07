function validaNome() {
  const nome = document.getElementById("nome").value;
  const erro = document.getElementById("nome-erro");

  if (nome.length < 3) {
    erro.style.display = "block";
    erro.innerHTML = "Nome deve conter mais que duas letras";
    erroForm = true;
  } else {
    erro.style.display = "none";
    erro.innerHTML = "";
    erroForm = false;
  }
}

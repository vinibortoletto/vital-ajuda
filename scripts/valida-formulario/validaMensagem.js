function validaMensagem() {
  const mensagem = document.getElementById("mensagem").value;
  const erro = document.getElementById("mensagem-erro");

  if (mensagem.length < 10) {
    erro.style.display = "block";
    erro.innerHTML = "Elabore melhor sua mensagem";
    erroForm = true;
  } else {
    erro.style.display = "none";
    erro.innerHTML = "";
    erroForm = false;
  }
}

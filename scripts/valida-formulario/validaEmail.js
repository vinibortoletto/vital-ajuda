function validaEmail() {
  const email = document.getElementById("email").value;
  const erro = document.getElementById("email-erro");
  const regexEmail = /\S+@\S+\.\S+/;

  if (email === "" || !regexEmail.test(email)) {
    erro.style.display = "block";
    erro.innerHTML = "Email inválido";
    erroForm = true;
  } else {
    erro.style.display = "none";
    erro.innerHTML = "";
    erroForm = false;
  }
}

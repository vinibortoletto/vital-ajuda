const form = document.getElementById("form");
const enviarBtn = document.getElementById("enviar-btn");
const cancelarBtn = document.getElementById("cancelar-btn");

let erroForm = true;

enviarBtn.addEventListener("click", () => {
  form.addEventListener("submit", e => e.preventDefault());

  validaForm();

  if (!erroForm) {
    setTimeout(() => {
      alert("Mensagem enviada!");
      setTimeout(() => {
        form.reset();
      }, 500);
    }, 500);
  }
});

cancelarBtn.addEventListener("click", () => {
  form.addEventListener("submit", e => e.preventDefault());
  form.reset();
});

function validaForm() {
  if (erroForm) {
    validaNome();
    validaEmail();
    validaTelefone();
    validaMensagem();
  }
}

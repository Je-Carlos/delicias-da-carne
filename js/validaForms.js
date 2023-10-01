const formulario = document.getElementById("valida-form");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
});

function validarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const nomeSplit = nome.split(" ");
  if (nome === "" || nomeSplit.length < 2) {
    alert("Nome não pode estar em branco e deve possuir pelo menos 2 nomes.");
    return false;
  }

  const email = document.getElementById("email").value;
  if (!validarEmail(email)) {
    alert("E-mail inválido.");
    return false;
  }

  const telefone = document
    .getElementById("telefone")
    .value.replace(/[\s()+-]/g, "");
  if (telefone.length !== 11) {
    alert("Telefone deve possuir 11 caracteres.");
    return false;
  }
  const preferencias = document.querySelectorAll(
    'input[name="preferencia"]:checked'
  );
  if (preferencias.length === 0) {
    alert("Selecione pelo menos uma preferência.");
    return false;
  }
  const tipoCarne = document.getElementById("tipo-carne").value;
  if (tipoCarne === "") {
    alert("Selecione pelo menos um tipo de carne favorita.");
    return false;
  }
  const mensagem = document.getElementById("mensagem").value;
  if (mensagem.length < 5) {
    alert("Mensagem deve conter pelo menos 5 caracteres.");
    return false;
  }
  return true;
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const dataNascimento = document.getElementById("data_nascimento").value;
    const telefone = document.getElementById("telefone").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const endereco = document.getElementById("endereco").value.trim();

    const clinica = document.getElementById("clinica").value.trim();
    const especialidade = document.getElementById("especialidade").value.trim();
    const dataConsulta = document.getElementById("data").value;
    const horaConsulta = document.getElementById("hora").value;

    if (
      !nome ||
      !sobrenome ||
      !cpf ||
      !dataNascimento ||
      !telefone ||
      !cep ||
      !endereco ||
      !clinica ||
      !especialidade ||
      !dataConsulta ||
      !horaConsulta
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const dataHoraConsulta = new Date(`${dataConsulta}T${horaConsulta}`);
    const agora = new Date();

    if (dataHoraConsulta <= agora) {
      alert(
        "A data e hora da consulta devem ser posteriores ao momento atual."
      );
      return;
    }

    alert("Formulário enviado com sucesso!");
    form.submit();
  });
});

const form = document.getElementById("form-cadastro");
const campoNome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = campoNome.value.trim();

    if (nome === "") {
        mensagem.textContent = "Digite o nome do aluno.";
        return;
    }

    mensagem.textContent = `Aluno ${nome} cadastrado com sucesso!`;
    form.reset();
});

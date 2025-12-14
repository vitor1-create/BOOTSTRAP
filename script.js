document.getElementById("formNewsletter").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem");

    if (email === "" || !email.includes("@")) {
        mensagem.textContent = "Digite um email válido.";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";
    }
});

function alternarTema() {
    document.body.classList.toggle("tema-escuro");
}

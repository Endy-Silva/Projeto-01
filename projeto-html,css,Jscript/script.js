function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Lógica de autenticação aqui
    // Por exemplo, você pode verificar se o username e senha são válidos

    alert("Usuário: " + username + "\nSenha: " + password);
}
function adicionarImagem(url) {
    var galeria = document.getElementById("galeria");
    var img = document.createElement("img");
    img.src = url;
    galeria.appendChild(img);
}

document.getElementById("ver-mais-button").addEventListener("click", function() {
    // Chamada da função para adicionar imagens
    adicionarImagem("");
    adicionarImagem("");
    // Adicione quantas imagens quiser aqui
});

// Função para exibir mais imagens (pode ser chamada no HTML quando necessário)
function verMais() {
    // Chamada da função para adicionar imagens
    adicionarImagem("");
    adicionarImagem("");
    // Adicione quantas imagens quiser aqui
}
// script.js

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica se as credenciais são correspondentes aos dados armazenados no localStorage
    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
        alert("Login bem-sucedido!");
        // Redirecionar para a próxima página ou executar outras ações necessárias após o login
    } else {
        alert("Nome de usuário ou senha incorretos!");
    }
}

// Função para realizar o cadastro
function cadastrar() {
    var username = prompt("Digite o nome de usuário:");
    var password = prompt("Digite a senha:");

    // Armazenar as informações de login no localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Cadastro realizado com sucesso!");
}


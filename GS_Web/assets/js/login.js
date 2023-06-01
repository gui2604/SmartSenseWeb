// pagina validar login
function validar() {
    // document.getElementById("loginForm").addEventListener("submit", function (event) {
    //     event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "123456") {
        alert("Login bem-sucedido!");
        window.open('https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021');
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
}
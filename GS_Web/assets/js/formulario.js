function formulario(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || phone === "" || email === "" || message === "") {
      alert("Preencha todos os campos.");
    } else {
      alert("Formulário enviado com sucesso!");

      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  }
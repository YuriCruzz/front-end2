function fazerLogin() {
  let { email, password } = _recuperarCampos();

  const credenciais = {
    email: email.value,
    password: password.value
  };

  fetch('https://reqres.in/api/login', {
    method: 'POST',
    body: JSON.stringify(credenciais),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json())
  .then((json) => {
    let boasVindas = document.getElementById('boas-vindas');

    if(json.token) {
      boasVindas.innerText = 'Bem-vindo ' + emailInserido;
      boasVindas.style = "background-color: green; color: white";
    } else {
      boasVindas.innerText = 'Email ou senha incorreto';
      boasVindas.style = "background-color: red; color: white";
    }
  }); 
}
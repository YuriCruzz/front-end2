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

function registrar() {
   let { email, password } = _recuperarCampos();

  const credenciais = {
    email: email.value,
    password: password.value
  };

  fetch('https://reqres.in/api/register', {
    method: 'POST',
    body: JSON.stringify(credenciais),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json())
  .then((json) => {
    let boasVindas = document.getElementById('boas-vindas');

    if(json.token) {
      boasVindas.innerText = 'Cadastro criado com sucesso';
      boasVindas.style = "background-color: green; color: white";
    } else {
      boasVindas.innerText = 'Erro ao realizar cadastro';
      boasVindas.style = "background-color: red; color: white";
    }
  }); 
 
}

function _recuperarCampos() {
  return {
    email: document.getElementById('email'),
    password: document.getElementById('password'),
  };
}
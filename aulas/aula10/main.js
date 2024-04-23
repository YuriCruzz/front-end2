window.addEventListener("load", () => {
  const list = document.querySelector('.list');

  fetch("https://reqres.in/api/users?page=1")
    .then((response) => response.json())
    .then((json) => {
      json.data.map(user => {
        let li = document.createElement('li');
        li.innerHTML = `<img src="${user.avatar}"/><span>${user.first_name} ${user.last_name}</span> | <span>${user.email}</span>`;
        list.appendChild(li);
      })
    });
})


import Axios from 'axios';

const useLogin = (callback) => {
  console.log(callback);
  const onSubmit = (event) => {
    event.preventDefault();

    Axios.post("http://localhost:8080/login", {
      username: event.target.elements.matricula.value,
      password: event.target.elements.password.value
    }).then(response => {
      localStorage.clear();
      const usuario = {
        matricula: response.headers.matricula,
        nome: response.headers.nome
      };
      localStorage.setItem("Authorization", response.headers.authorization);
      localStorage.setItem("UsuarioLogado", JSON.stringify(usuario));
      console.log(response.headers);
      window.location.href = "/app";
    });

  }

  return onSubmit;
}

export default useLogin;
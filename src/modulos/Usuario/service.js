import Axios from 'axios';

const buscarTodos = () => {
  Axios.get("http://localhost:8080/usuario", {
    headers: { 'Authorization': localStorage.getItem("Authorization") }
  }).then(response => {
    return response.data;
  });
}

export default buscarTodos;
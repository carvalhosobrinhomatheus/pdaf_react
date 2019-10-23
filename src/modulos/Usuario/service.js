import Axios from 'axios';

export async function buscarTodos() {
  await Axios.get("http://localhost:8080/usuario", {
    headers: { 'Authorization': localStorage.getItem("Authorization") }
  }).then(response => {
    return response.data;
  });
  return false;
}
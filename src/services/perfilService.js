import Axios from 'axios';
import { API, REST_PERFIL_SIMPLES } from '../utils/api';

export async function buscarTodosPerfis() {
  return(
    await Axios.get(API + REST_PERFIL_SIMPLES, {
      headers: { 'Authorization': localStorage.getItem("Authorization") }
    }).then(response => {
      return response;
    })
  );
}
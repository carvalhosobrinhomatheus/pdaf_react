import Axios from 'axios';
import { API, REST_PERFIL_SIMPLES, REST_PERFIL } from '../utils/api';

export async function buscarTodosPerfisSimplesService() {
  return (
    await Axios.get(API + REST_PERFIL_SIMPLES, {
      headers: { 'Authorization': localStorage.getItem("Authorization") }
    }).then(response => {
      return response;
    })
  );
}

export async function buscarTodosPerfisService() {
  return (
    await Axios.get(API + REST_PERFIL, {
      headers: { 'Authorization': localStorage.getItem("Authorization") }
    }).then(response => {
      return response;
    })
  );
}
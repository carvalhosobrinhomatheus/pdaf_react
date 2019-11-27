import Axios from 'axios';
import { API, REST_PERFIL_SIMPLES, REST_PERFIL, REST_PERFIL_ATIVAR_INATIVAR } from '../utils/api';

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

export async function buscarPerfilPorIdService(idPerfil) {
  return (
    await Axios.get(API + REST_PERFIL + "/" + idPerfil, {
      headers: { 'Authorization': localStorage.getItem("Authorization") }
    }).then(response => {
      return response;
    })
  );
}

export async function inserirPerfisService(perfil) {
  return (
    await Axios.post(API + REST_PERFIL, perfil, {
      headers: { 'Authorization': localStorage.getItem("Authorization") }
    }).then(response => {
      return response;
    })
  );
}

export async function ativarDesativarPerfilService(perfil) {
  return (
    await Axios.put(API + REST_PERFIL + REST_PERFIL_ATIVAR_INATIVAR +"/"+ perfil.idPerfil, perfil, {
      headers: { 'Authorization': localStorage.getItem("Authorization") }
    }).then(response => {
      return response;
    })
  );
}

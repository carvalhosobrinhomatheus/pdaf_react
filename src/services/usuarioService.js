import Axios from 'axios';
import { API, REST_USUARIO } from '../utils/api';

export async function buscarTodosUsuariosService() {
  return(
    await Axios.get(API + REST_USUARIO, {
      headers: { 'Authorization': localStorage.getItem("Authorization") }
    }).then(response => {
      return response;
    })
  );
}

export async function inserirUsuarioService(usuario) {
  return(
    await Axios.post(API + REST_USUARIO, usuario, {
      headers: { 'Authorization': localStorage.getItem("Authorization") }
    }).then(response => {
      return response;
    })
  );
}

export async function alterarUsuarioService(usuario) {
  return(
    await Axios.put(API + REST_USUARIO +"/"+ usuario.idUsuario, usuario, {
      headers: { 'Authorization': localStorage.getItem("Authorization") }
    }).then(response => {
      return response;
    })
  );
}

export async function deletarUsuarioService(usuario) {
  return(
    await Axios.delete(API + REST_USUARIO +"/"+ usuario.idUsuario, {
      headers: { 'Authorization': localStorage.getItem("Authorization") }
    }).then(response => {
      return response;
    })
  );
}
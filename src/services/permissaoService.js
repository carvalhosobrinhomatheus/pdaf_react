import Axios from 'axios';
import { API, REST_PERFIL_PERMISSAO, REST_PERFIL } from '../utils/api';

export async function alterarPerfilPermissaoService(perfilPermissao) {
  return (
    await Axios.put(API + REST_PERFIL_PERMISSAO+ "/" + perfilPermissao.idPerfilPermissao, perfilPermissao, {
      headers: { 'Authorization': localStorage.getItem("Authorization") }
    }).then(response => {
      return response;
    })
  );
}


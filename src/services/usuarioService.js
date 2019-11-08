import Axios from 'axios';
import { API, REST_USUARIO } from '../utils/api';

export async function buscarTodosUsuarios() {
  return(
    await Axios.get(API + REST_USUARIO, {
      headers: { 'Authorization': localStorage.getItem("Authorization") }
    }).then(response => {
      return response;
    })
  );
}
import Axios from 'axios';
import { REST_API, REST_USUARIO } from '../../utils/Api';

export const buscarTodos = () => {
  Axios.get(REST_API+REST_USUARIO, {
    headers: { 'Authorization': localStorage.getItem("Authorization") }
  }).then(response => {
    console.log(response.data);
    return response.data;
  });
  return false;
}

export default buscarTodos;
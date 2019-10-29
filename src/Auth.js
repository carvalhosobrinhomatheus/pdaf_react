import { usuarioLogadoHelper, extrairAuthorizationHelper } from './utils/Helpers';


export const autenticado = () => {
    if(extrairAuthorizationHelper() != null){
        return true;
    }
    return false;
};

export const temPermissaoComponente = () => {
    if(usuarioLogadoHelper() != null){
        return true;
    }
    return false;
};
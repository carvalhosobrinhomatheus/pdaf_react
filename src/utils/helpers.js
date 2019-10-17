
export function payloadHelper() {
    let jwtDecode = require('jwt-decode')
    let token = localStorage.getItem("Authorization");
    if (token === null) {
        return false;
    }

    let decodedPayload = jwtDecode(token);

    return decodedPayload;
}

export function extrairAuthorizationHelper() {
    return localStorage.getItem("Authorization");
}

export function logoutHelper() {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("UsuarioLogado");
}

export function usuarioLogadoHelper() {
    let token = localStorage.getItem("Authorization");
    if (token === null) {
        return false
    }

    let decodedPayload = this.getPayload()
    let res = this.compararDatas(new Date(decodedPayload.exp), new Date())

    if (res !== 1) {
        this.logout()
        return false;
    }
    return true;
}

export function formatarDataHelper(date, separator) {

    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getUTCDate(),
        year = '' + d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join(separator);
}

export function formatarDataHoraHelper(dataHora, separator) {
    var data = this.formatarData(dataHora, separator);
    var d = new Date(dataHora)
    return data + ' às ' + d.toLocaleTimeString('pt-PT');
}

export function dateToStringHelper(data) {
    var retorno = this.formatarData(data);
    return retorno.substr(6, 4) + "-" + retorno.substr(3, 2) + "-" + retorno.substr(0, 2) + " 00:00";
}

export function spliceHelper(string, idx, rem, char) {
    return string.slice(0, idx) + char + string.slice(idx + Math.abs(rem));
};

export function getUsuarioHelper() {
    let user = localStorage.getItem("UsuarioLogado")
    return user ? JSON.parse(user) : ""
}

export function verificarPermissoesHelper(permissao) {
    const permissoesPresentesNoToken = payloadHelper().permissao;
    if (permissoesPresentesNoToken.includes(permissao)) {
        return true;
    } 
    return false;
}
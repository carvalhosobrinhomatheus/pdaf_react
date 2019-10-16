
function getPayload() {
    let jwtDecode = require('jwt-decode')
    let token = localStorage.getItem("Authorization");
    if (token === null) {
        return false;
    }

    let decodedPayload = jwtDecode(token);
    return decodedPayload;
}

function logout() {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("UsuarioLogado");
}

function isLogado() {
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

function formatarData(date, separator) {

    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getUTCDate(),
        year = '' + d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join(separator);
}

function formatarDataHora(dataHora, separator) {
    var data = this.formatarData(dataHora, separator);
    var d = new Date(dataHora)
    return data + ' às ' + d.toLocaleTimeString('pt-PT');
}

function dateToString(data) {
    var retorno = this.formatarData(data);
    return retorno.substr(6, 4) + "-" + retorno.substr(3, 2) + "-" + retorno.substr(0, 2) + " 00:00";
}

// Atualizar para lista de perfis
function getPerfil() {
    let payload = this.getPayload()
    return payload === false ? false : payload.refIdPerfil
}

function splice(string, idx, rem, char) {
    return string.slice(0, idx) + char + string.slice(idx + Math.abs(rem));
};

function getUsuario() {
    let user = localStorage.getItem("UsuarioLogado")
    return user ? JSON.parse(user) : ""
}

export default {
    getPayload,
    logout,
    isLogado,
    formatarData,
    formatarDataHora,
    dateToString,
    getPerfil,
    splice,
    getUsuario
};

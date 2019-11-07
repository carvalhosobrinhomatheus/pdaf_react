export const InitialState = {
    theme: {
        color: { 
            primary: 'secondary'
        }
    },
    menu: {
        usuario: false,
        perfil: false,
    },
    usuario: {
        lista:[]
    },
    perfil: {
        lista:[
            {
                "idPerfil": 0,
                "ativo": true,
                "nome": "ADMIN",
                "permissao": [
                    {
                        "idPermissao": 6,
                        "ativo": true,
                        "nome": "INSERIR_PERFIL",
                        "entidadeSistema": "PERFIL",
                        "temPermissao": false
                    },
                    {
                        "idPermissao": 7,
                        "ativo": true,
                        "nome": "ALTERAR_PERFIL",
                        "entidadeSistema": "PERFIL",
                        "temPermissao": true
                    },
                    {
                        "idPermissao": 1,
                        "ativo": true,
                        "nome": "VISUALIZAR_USUARIO",
                        "entidadeSistema": "USUARIO",
                        "temPermissao": false
                    },
                    {
                        "idPermissao": 5,
                        "ativo": true,
                        "nome": "VISUALIZAR_PERFIL",
                        "entidadeSistema": "PERFIL",
                        "temPermissao": true
                    },
                    {
                        "idPermissao": 3,
                        "ativo": true,
                        "nome": "ALTERAR_USUARIO",
                        "entidadeSistema": "USUARIO",
                        "temPermissao": true
                    },
                    {
                        "idPermissao": 8,
                        "ativo": true,
                        "nome": "DELETAR_PERFIL",
                        "entidadeSistema": "PERFIL",
                        "temPermissao": true
                    },
                    {
                        "idPermissao": 4,
                        "ativo": true,
                        "nome": "DELETAR_USUARIO",
                        "entidadeSistema": "USUARIO",
                        "temPermissao": true
                    }
                ]
            },
            {
                "idPerfil": 1,
                "ativo": false,
                "nome": "GESTOR",
                "permissao": []
            }
        ]
    }
}
import React, { useEffect } from 'react';
import { useStateValue } from '../../../store/state';
import UsuarioTable from './UsuarioTable';
import {
    buscarTodosUsuariosService,
    inserirUsuarioService,
    deletarUsuarioService,
    alterarUsuarioService
} from '../../../services/usuarioService';

export default function Usuario() {
    const [{ usuario }, dispatchUsuario] = useStateValue();

    useEffect(() => {
        if (usuario.lista.length === 0) {
            buscarUsuariosAPI();
        }
    }, [usuario.lista]);

    const buscarUsuariosAPI = async () => {
        const response = await buscarTodosUsuariosService();
        dispatchUsuario({
            type: 'popularListaUsuario',
            data: response.data,
        });
    };

    const inserirUsuario = async (newData) => {
        try {
            const retornoRequest = await inserirUsuarioService(newData);
            if (retornoRequest.status === 201) {
                newData = { ...newData, idUsuario: retornoRequest.headers['id'] }
                const dados = [...usuario.lista, newData];

                dispatchUsuario({
                    type: 'inserirUsuario',
                    data: dados,
                })
            }
        } catch (error) {
            alert("Ocorreu um erro ao inserir usuário!");
        }
    }

    const alterarUsuario = async (newData, oldData) => {
        const retornoRequest = await alterarUsuarioService(newData);
        if (retornoRequest.status === 204) {
            const dados = [...usuario.lista];
            dados[dados.indexOf(oldData)] = newData;
            dispatchUsuario({
                type: 'alterarUsuario',
                data: dados,
            })
        }
    }

    const deletarUsuario = async (oldData) => {
        try {
            const retornoRequest = await deletarUsuarioService(oldData);
            if (retornoRequest.status === 204) {
                const dados = [...usuario.lista];
                dados.splice(dados.indexOf(oldData), 1);

                dispatchUsuario({
                    type: 'deletarUsuario',
                    data: dados,
                })
            }
        } catch (error) {
            alert("Erro ao tentar deletar usuário!");
        }

    }

    return (
        <UsuarioTable
            usuarios={usuario.lista}
            inserirUsuario={inserirUsuario}
            alterarUsuario={alterarUsuario}
            deletarUsuario={deletarUsuario}
        />
    );
}
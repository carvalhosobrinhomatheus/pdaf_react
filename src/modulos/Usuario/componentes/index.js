import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../../store/state';
import UsuarioTable from './UsuarioTable';
import service from '../service';


export default function Usuario() {

    const [{ usuario }, dispatch] = useStateValue();

    useEffect(() => {
        const teste = service.buscarTodos;
        if (!usuario.lista.length > 0) {
            
            console.log(teste);
        }
        console.log(usuario.lista);
    }, [usuario.lista]);

    const inserirUsuario = (props, newData) => {

        //Chamada ao service para inserção em Backend
        
        dispatch({
            type: 'inserirUsuario',
            data: props,
        })
        console.log(newData);

    }

    const alterarUsuario = (props, newData) => {

        //Chamada ao service para alteração em Backend

        dispatch({
            type: 'alterarUsuario',
            data: props,
        })
        console.log(newData);
    }

    const deletarUsuario = (props, oldData) => {

        //Chamada ao service para deleção em Backend
        dispatch({
            type: 'deletarUsuario',
            data: props,
        })
        console.log(oldData);
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
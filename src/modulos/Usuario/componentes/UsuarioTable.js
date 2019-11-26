import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { LOCALIZATION } from '../../../utils/constantes';
import { buscarTodosPerfisSimplesService } from '../../../services/perfilService';
import { useStateValue } from '../../../store/state';
import { simplificarListaPerfil } from '../../../utils/helpers';

export default function UsuarioTable(props) {
    const [{ perfil }, dispatch] = useStateValue();

    var dinamicObject = (perfil.listaSimples.length > 0) ? perfil.listaSimples : [];

    const buscarPerfisSimples = async () => {
        const perfis = await buscarTodosPerfisSimplesService();
        const listaPerfisSimplificada = simplificarListaPerfil(perfis.data)
        inserirListaSimples(listaPerfisSimplificada);
    };

    const inserirListaSimples = (props) => {
        dispatch({
            type: 'inserirListaSimples',
            data: props,
        });
    }

    useEffect(() => {
        if (perfil.listaSimples.length == 0) {
            buscarPerfisSimples();
        }
    }, [perfil.listaSimples]);
    
    const colunas = [
        { title: 'ID', field: 'idUsuario', editable: null },
        { title: 'Nome', field: 'nome' },
        { title: 'Matrícula', field: 'matricula', type: 'numeric' },
        { title: 'Ativo', field: 'ativo', type: "boolean" },
        {
            title: 'Perfil', field: 'perfil',
            emptyValue: () => <div>PERFIL NÃO DEFINIDO</div>,
            lookup: dinamicObject,
        },
    ];

    const options = {
        actionsColumnIndex: -1,
    };

    return (
        <MaterialTable
            title="Usuários"
            localization={LOCALIZATION}
            columns={colunas}
            data={props.usuarios}
            options={options}
            editable={{
                onRowAdd: (newData) =>
                    new Promise(resolve => {
                        setTimeout(async () => {
                            resolve();
                            props.inserirUsuario(newData);
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if(newData.ativo !== oldData.ativo 
                                && newData.matricula !== oldData.matricula
                                && newData.nome !== oldData.nome
                                && newData.ativo !== oldData.ativo
                                && newData.perfil !== oldData.perfil){
                                props.alterarUsuario(newData, oldData);
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            props.deletarUsuario(oldData);
                        }, 600);
                    }),
            }}

        />
    );
}
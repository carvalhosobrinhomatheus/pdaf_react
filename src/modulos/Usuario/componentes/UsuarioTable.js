import React from 'react';
import MaterialTable from 'material-table';
import { LOCALIZATION } from '../../../utils/constantes';

export default function UsuarioTable(props) {

    const dinamicObject = { 0: "ADMIN", 1: "GESTOR", 3: "middle" };


    const colunas = [
        { title: 'ID', field: 'idUsuario', readonly: true },
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
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...props.usuarios, newData];
                            props.inserirUsuario(data, newData);
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...props.usuarios];
                            data[data.indexOf(oldData)] = newData;
                            props.alterarUsuario(data, newData);
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...props.usuarios];
                            data.splice(data.indexOf(oldData), 1);
                            props.deletarUsuario(data, oldData);
                        }, 600);
                    }),
            }}

        />
    );
}
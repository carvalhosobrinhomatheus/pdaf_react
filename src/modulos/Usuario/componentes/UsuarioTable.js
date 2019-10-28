import React from 'react';
import MaterialTable from 'material-table';

export default function UsuarioTable(props) {

    const colunas = [
        { title: 'Nome', field: 'nome' },
        { title: 'Matrícula', field: 'matricula', type: 'numeric' },
        { title: 'Ativo', field: 'ativo', type: "boolean" },
        { title: 'Perfil', field: 'perfil',
            lookup: { 0: 'ADMIN', 1: 'GESTOR' },
        },
    ];

    const options = {
        actionsColumnIndex: -1,
    };
    const actions = [{
        icon: "lock",
        tooltip: "GERENCIAR PERFIL",
        onClick: (event, rowData) => {
            console.log("teste");
            console.log(rowData);
        }
    }];

    return (
        <MaterialTable
            title="Usuários"
            columns={colunas}
            data={props.usuarios}
            options={options}
            actions={actions}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...props.usuarios, newData];
                            props.inserirUsuario(data);
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...props.usuarios];
                            data[data.indexOf(oldData)] = newData;
                            props.alterarUsuario(data);
                            console.log(data);
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...props.usuarios];
                            data.splice(data.indexOf(oldData), 1);
                            props.deletarUsuario(data);
                        }, 600);
                    }),
            }}
            
        />
    );
}
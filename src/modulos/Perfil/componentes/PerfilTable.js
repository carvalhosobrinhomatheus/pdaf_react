import React from 'react';
import MaterialTable from 'material-table';

export default function UsuarioTable(props) {

    const colunas = [
        { title: 'ID', field: 'idPerfil' },
        { title: 'Nome', field: 'nome' },
        { title: 'Ativo', field: 'ativo', type: 'boolean'},
    ];

    const options = {
        actionsColumnIndex: -1,
    };

    const actions = [{
        icon: "lock",
        tooltip: "GERENCIAR PERMISSÕES",
        onClick: (event, rowData) => {
            console.log("teste permissoes");
            console.log(rowData);
            
        }
    }];

    return (
        <MaterialTable
            title="Perfis"
            columns={colunas}
            data={props.perfil}
            options={options}
            actions={actions}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...props.perfil, newData];
                            props.inserirUsuario(data);
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...props.perfil];
                            data[data.indexOf(oldData)] = newData;
                            props.alterarUsuario(data);
                            console.log(data);
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...props.perfil];
                            data.splice(data.indexOf(oldData), 1);
                            props.deletarUsuario(data);
                        }, 600);
                    }),
            }}
        />
    );
}
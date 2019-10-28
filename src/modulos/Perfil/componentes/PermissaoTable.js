import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    },
}));

export default function PermissaoTable(props) {
    const classes = useStyles();
    const [grouping, setGrouping] = useState([{ columnName: 'entidadeSistema' }]);

    const colunas = [
        { title: 'Nome', field: 'nome', editable: null },
        { title: 'Entidade do Sistema', field: 'entidadeSistema', editable: null, defaultGroupOrder: true},
        { title: 'Permissao', field: 'temPermissao', type: "boolean" },
    ];

    const options = {
        actionsColumnIndex: -1,
        grouping: true,
        pageSize:10,
        pageSizeOptions:[10,20,30],
    };

    return (
        <div className={classes.root}>
        <MaterialTable
            title="Permissões"
            columns={colunas}
            data={props.perfil.permissao}
            options={options}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...props.perfil.permissao];
                            data[data.indexOf(oldData)] = newData;
                            props.perfil.permissao = data;
                            
                            props.alterarTemPermissaoPerfil(props.perfil);
                        }, 600);
                    }),
            }}
            
        />
        </div>
    );
}

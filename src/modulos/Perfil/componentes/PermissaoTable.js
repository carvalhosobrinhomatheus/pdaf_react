import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { mergeClasses } from '@material-ui/styles';

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

    const colunas = [
        { title: 'Nome', field: 'nome', editable: null },
        { title: 'Permissao', field: 'temPermissao', type: "boolean" },
    ];

    const options = {
        actionsColumnIndex: -1,
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
                            const idPerfil = props.perfil;
                            const data = [...props.perfil.permissao];
                            data[data.indexOf(oldData)] = newData;
                            props.perfil.permissao = data;
                            console.log(props.perfil);
                            props.alterarTemPermissaoPerfil(props.perfil);
                        }, 600);
                    }),
            }}
            
        />
        </div>
    );
}

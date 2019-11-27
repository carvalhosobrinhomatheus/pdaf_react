import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { LOCALIZATION } from '../../../utils/constantes';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { useStateValue } from '../../../store/state';
import { ativarDesativarPerfilService } from "../../../services/perfilService";

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
        { title: 'ID', field: 'permissao.idPermissao', editable: null },
        { title: 'Nome', field: 'permissao.nome', editable: null },
        { title: 'Entidade do Sistema', field: 'permissao.entidadeSistema', editable: null, defaultGroupOrder: true },
        { title: 'Permissão', field: 'temPermissao', type: "boolean" },
    ];

    const options = {
        actionsColumnIndex: -1,
        grouping: true,
        pageSize: 10,
        pageSizeOptions: [10, 20, 30],
    };

    return (
        <div className={classes.root}>
            <MaterialTable
                title="Permissões"
                columns={colunas}
                localization={LOCALIZATION}
                data={props.perfil.perfilPermissao}
                options={options}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                if (newData.temPermissao !== oldData.temPermissao) {
                                    props.alterarTemPermissaoPerfil(newData, oldData, props.idPerfil);
                                }
                            }, 600);
                        }),
                }}
            />
        </div>
    );
}
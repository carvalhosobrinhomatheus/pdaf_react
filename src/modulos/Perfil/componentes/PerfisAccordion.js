import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PermissaoTable from "./PermissaoTable";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function PerfisAccordion(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const [perfis, setPerfis] = useState([
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
    ]);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const alterarTemPermissaoPerfil = (props) => {
        const data = [...perfis];
        data[data.indexOf(props.idPerfil)] = props;
        setPerfis(data);
    }

    return (
        <div className={classes.root}>
            {perfis.map(perfil => (
                <ExpansionPanel expanded={expanded === 'panel'+perfil.idPerfil} onChange={handleChange('panel'+perfil.idPerfil)}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panelbh-content"
                        id="panelbh-header"
                    >
                        <Typography className={classes.heading}>{perfil.nome}</Typography>
                        <Typography className={classes.secondaryHeading}>{(perfil.ativo ? 'Perfil Ativo': 'Perfil Inativo')}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <PermissaoTable perfil={perfil} alterarTemPermissaoPerfil={alterarTemPermissaoPerfil}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))
            }
        </div>
    );
}
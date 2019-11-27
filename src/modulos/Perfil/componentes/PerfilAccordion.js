import React, { useState } from 'react';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, Switch } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import PermissaoTable from "./PermissaoTable";
import { useStateValue } from '../../../store/state';
import { alterarPerfilPermissaoService } from "../../../services/permissaoService";
import { ativarDesativarPerfilService } from "../../../services/perfilService";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

export default function PerfisAccordion(props) {
    const [expanded, setExpanded] = useState(false);
    const [{ perfil }, dispatchPerfil] = useStateValue();

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function buscarIdDePefilEmLista(dados, idPerfil){
        for (var i = 0; i < dados.length; i++) {
            if (dados[i].idPerfil == idPerfil) {
                return i;
            }
        }
    }

    const alterarTemPermissaoPerfil = async (newData, oldData, idPerfil) => {
        const responseRequest = await alterarPerfilPermissaoService(newData);
        if (responseRequest.status === 204) {
            const dados = [...perfil.lista];
            const i = buscarIdDePefilEmLista(dados, idPerfil);
            dados[i].perfilPermissao[dados[i].perfilPermissao.indexOf(oldData)] = newData;
            dispatchPerfil({
                type: "alterarListaPerfilPermissao",
                data: dados
            })
        }
    }

    const ativarDesativarPerfil = async (perfil) => {
        const responseRequest = await ativarDesativarPerfilService(perfil);
        if (responseRequest.status === 204) {
            console.log("OK");
            return true;
        }else{
            return false;
        }
    }

    function handleClickCheckbox(e) {
        const idPerfil = e.target.value;
        const i = buscarIdDePefilEmLista(perfil.lista, idPerfil);
        const perfilAlterarStatus = perfil.lista[i];
        
        const response = ativarDesativarPerfil(perfilAlterarStatus);
        if(response){
            perfil.lista[i].ativo = !perfil.lista[i].ativo;
        }else{
            alert("Erro ao tentar atualizar status de perfil");
        }
    }

    return (
        <>
            {perfil.lista.map(perfilInterno => (
                <ExpansionPanel key={perfilInterno.idPerfil} expanded={expanded === 'panel' + perfilInterno.idPerfil} onChange={handleChange('panel' + perfilInterno.idPerfil)}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panelbh-content"
                        id="panelbh-header"
                    >
                        <Typography className={props.classes.heading}>{perfilInterno.nome}</Typography>
                        <Switch id={"status"+perfilInterno.idPerfil} checked={perfilInterno.ativo} onClick={e => handleClickCheckbox(e)} value={perfilInterno.idPerfil} inputProps={{ 'aria-label': 'primary checkbox' }} />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <PermissaoTable perfil={perfilInterno} idPerfil={perfilInterno.idPerfil} alterarTemPermissaoPerfil={alterarTemPermissaoPerfil} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))
            }
        </>
    );
}
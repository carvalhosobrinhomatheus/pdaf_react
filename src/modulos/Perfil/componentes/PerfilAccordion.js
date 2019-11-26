import React, { useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PermissaoTable from "./PermissaoTable";
import { useStateValue } from '../../../store/state';
import { alterarPerfilPermissaoService } from "../../../services/permissaoService";


export default function PerfisAccordion(props) {
    const [expanded, setExpanded] = useState(false);
    const [{ perfil }, dispatchPerfil] = useStateValue();

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const alterarTemPermissaoPerfil = async (newData, oldData, idPerfil) => {
        const responseRequest = await alterarPerfilPermissaoService(newData);
        if(responseRequest.status === 204){
          const dados = [...perfil.lista];
          dados[idPerfil].perfilPermissao[dados[idPerfil].perfilPermissao.indexOf(oldData)] = newData;
          dispatchPerfil({
            type: "alterarListaPerfilPermissao",
            data: dados
          })
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
                        <Typography className={props.classes.secondaryHeading}>{(perfilInterno.ativo ? 'ATIVO' : 'INATIVO')}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <PermissaoTable perfil={perfilInterno} idPerfil={perfilInterno.idPerfil} alterarTemPermissaoPerfil={alterarTemPermissaoPerfil}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))
            }
        </>
    );
}
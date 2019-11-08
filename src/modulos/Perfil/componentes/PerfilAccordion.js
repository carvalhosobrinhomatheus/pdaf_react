import React, { useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PermissaoTable from "./PermissaoTable";


export default function PerfisAccordion(props) {
    
    const [expanded, setExpanded] = useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const alterarTemPermissaoPerfil = (props) => {
        // const data = [...perfis];
        // data[data.indexOf(props.idPerfil)] = props;
        // setPerfis(data);
    }

    return (
        <>
            {props.perfis.map(perfil => (
                <ExpansionPanel key={perfil.idPerfil} expanded={expanded === 'panel'+perfil.idPerfil} onChange={handleChange('panel'+perfil.idPerfil)}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panelbh-content"
                        id="panelbh-header"
                    >
                        <Typography className={props.classes.heading}>{perfil.nome}</Typography>
                        <Typography className={props.classes.secondaryHeading}>{(perfil.ativo ? 'Perfil Ativo': 'Perfil Inativo')}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <PermissaoTable perfil={perfil} alterarTemPermissaoPerfil={alterarTemPermissaoPerfil}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))
            }
        </>
    );
}
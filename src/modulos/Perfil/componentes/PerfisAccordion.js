import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PermissaoAccordion from "./PermissaoAccordion";

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

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {props.perfis.map(perfil => (
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
                        <PermissaoAccordion perfil={perfil}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))
            }
        </div>
    );
}
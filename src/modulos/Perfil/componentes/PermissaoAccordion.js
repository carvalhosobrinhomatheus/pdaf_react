import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
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

export default function PermissaoAccordion(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const [entidade, setEntidade] = useState([
        "USUARIO", "PERFIL"
    ]);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {props.perfil.entidade.map(entidade => (
                <ExpansionPanel expanded={expanded === 'panel'+entidade.nome} onChange={handleChange('panel'+entidade.nome)}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panelbh-content"
                        id="panelbh-header"
                    >
                        <Typography className={classes.heading}>{entidade.nome}</Typography>
                        <Typography className={classes.secondaryHeading}>Permissões de {entidade.nome}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <PermissaoTable entidade={entidade}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))
            }
        </div>
    );
}
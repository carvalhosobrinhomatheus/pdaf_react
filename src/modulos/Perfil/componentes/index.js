import React, { useState } from 'react';
import PerfisAccordion from './PerfisAccordion'; 
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from '../../../store/state';

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

export default function ContainedButtons() {
  const classes = useStyles();
  const [{ perfil }, dispatch] = useStateValue();  
  const [perfis, setPerfis] = useState(perfil.lista);
  
  return (
    <div className={classes.root}>
      <PerfisAccordion classes={classes} perfis={perfis}/>
    </div>
  );
}
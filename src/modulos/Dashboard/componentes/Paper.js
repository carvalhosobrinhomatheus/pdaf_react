import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    rootPapper: {
        padding: theme.spacing(3, 3),
        margin: theme.spacing(13, 7),
    },
}));

export default function PaperSheet({ ...props }) {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.rootPapper}>
                <Typography variant="h5" component="h3">
                    teste
                    </Typography>
                <Typography component="p">
                    Teste
                    </Typography>
            </Paper>
        </div>
    );
}
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
//import Styles from '../styles';
import UsuarioTable from './UsuarioTable';
import { functionTypeAnnotation } from '@babel/types';

const Styles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    rootPapper: {
        padding: theme.spacing(3, 3),
        margin: theme.spacing(12, 4),
        width: '100%',
    },
}));

export default function Usuario() {
    const classes = Styles();
    const [usuarios, setUsuarios] = useState([
        { id: 0, nome: "matheus", matricula: "2444267" },
    ]);

    const usersData = [
        { id: 1, nome: 'Tania', matricula: 'floppydiskette' },
        { id: 2, nome: 'Craig', matricula: 'siliconeidolon' },
        { id: 3, nome: 'Ben', matricula: 'benisphere' },
      ]
    
      const [users, setUsers] = useState(usersData)
    
      const addUser = () =>{
        const user = { id: 1, nome: 'Tania', matricula: 'floppydiskette' };
        user.id = users.length + 1
        setUsers([...users, user])
      }

    return (
        <Paper className={classes.rootPapper}>
            <h1>Usuários</h1>
            <Box display="flex" flexDirection="row-reverse">
                <Fab size="small" color="primary" aria-label="add" onClick={() => addUser()}>
                    <AddIcon />
                </Fab>
            </Box>
            <div className="flex-large">
                <h2>View users</h2>
                <UsuarioTable usuarios={users} />
            </div>
        </Paper>
    );
}
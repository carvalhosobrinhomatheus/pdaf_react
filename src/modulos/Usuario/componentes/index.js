import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

export default function Usuario() {
    return (
        <div>
            <h1>teste de usuario</h1>
            <Box display="flex" flexDirection="row-reverse" >
                <Button >Gerenciar Perfil</Button>
            </Box>

        </div>
    );
}
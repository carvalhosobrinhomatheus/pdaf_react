import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Checkbox, Button } from '@material-ui/core';
import { inserirPerfisService, buscarPerfilPorIdService } from "../../../services/perfilService";
import { useStateValue } from '../../../store/state';

export default function PerfilForm() {
    const [{ perfil }, dispatchPerfil] = useStateValue();

    function handleSubmit(e) {
        e.preventDefault();
        const nomePerfil = document.getElementById('nome').value;
        const perfilInserir = { nome: nomePerfil, ativo: false };
        inserirPerfil(perfilInserir);
    }

    const inserirPerfil = async (newData) => {
        try {
            const retornoRequest = await inserirPerfisService(newData);
            if (retornoRequest.status === 201) {
                const idPerfil = retornoRequest.headers['id'];
                const retornoRequestPerfilCompleto = await buscarPerfilPorIdService(idPerfil);
                newData = retornoRequestPerfilCompleto.data;
                const dados = [...perfil.lista, newData];
                console.log(newData)
                dispatchPerfil({
                    type: 'inserirPerfil',
                    data: dados,
                })
            }
        } catch (error) {
            alert("Ocorreu um erro ao inserir Perfil!");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <InputLabel htmlFor="nome">Nome do Perfil</InputLabel>
                <Input id="nome" aria-describedby="nome-helper-text" />
                <FormHelperText id="nome-helper-text">Nome de referência para novo perfil</FormHelperText>
                <Button color="primary" type="submit">
                    Inserir
                </Button>
            </FormControl>
        </form>
    );
}







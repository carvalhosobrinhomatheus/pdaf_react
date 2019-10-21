import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const UsuarioTable = props => (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Perfil</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {props.usuarios.length > 0 ? (
                props.usuarios.map(usuario => (

                    <tr key={usuario.idUsuario}>
                        <td>{usuario.idUsuario}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.matricula}</td>
                        <td><Select displayEmpty >{usuario.perfil.length > 0 ? (
                            usuario.perfil.map(perfil => (
                                <MenuItem>{perfil.nome}</MenuItem>
                            ))
                        ) : (
                                <MenuItem><em>Não cadastrado</em></MenuItem>
                            )
                        }</Select>
                        </td>
                        <td>
                            <button className="button muted-button">Editar</button>
                            <button className="button muted-button">Deletar</button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>Sem usuários cadastrados!</td>
                    </tr>)}
        </tbody>
        {console.log(props.usuarios)}
    </table>
)

export default UsuarioTable;
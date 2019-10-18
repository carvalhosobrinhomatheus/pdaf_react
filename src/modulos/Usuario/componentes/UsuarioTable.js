import React from 'react'

const UsuarioTable = props => (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {props.usuarios.length > 0 ? (
                props.usuarios.map(usuario => (
                <tr key={usuario.id}>
                    <td >{usuario.id}</td>
                    <td>{usuario.nome}</td>
                    <td>{usuario.matricula}</td>
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
    </table>
)

export default UsuarioTable;
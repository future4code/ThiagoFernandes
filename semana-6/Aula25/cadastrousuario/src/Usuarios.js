import React from "react"
import styled from "styled-components"

const TodosUsuarios = styled.ul`
  list-style: none;
`
const Usuario = styled.li`
  display: flex;
`
////////////////////////////////////////////////////////////////////////////////////

export class Usuarios extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (

      <TodosUsuarios>

        <h2>Usuários Cadastrados:</h2>

        {this.props.usuarios.map(usuario => (

          <Usuario>
            {usuario.nome}
            <button>
              Excluir
            </button>
          </Usuario>
        ))}

      </TodosUsuarios>

    );
  }
}

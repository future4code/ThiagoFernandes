import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
////////////////////////////////////////////////////////////////////////////////////

export class Cadastrar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      nome: "",
    }
  }

  salvaNome = (event) => {
    this.setState({nome: event.target.value})
  }

  salvaEmail = (event) => {
    this.setState({email: event.target.value})
  }

  novoUsuario = () => {
    const nome = this.state.nome
    const email = this.state.email
    this.props.criarUsuarios(nome, email);
  }


  render() {
    return (

      <Wrapper>

        <div>
          <label>Nome:</label>
          <input 
          type="text"
          id="nome"
          value={this.state.nome}
          onChange={this.salvaNome}
          />
        </div>

        <div>
          <label>E-mail:</label>
          <input 
          type="text"
          id="email"
          value={this.state.email}
          onChange={this.salvaEmail}
          />
        </div>

        <button onClick={this.novoUsuario}>Cadastrar</button>

      </Wrapper>

    );
  }
}

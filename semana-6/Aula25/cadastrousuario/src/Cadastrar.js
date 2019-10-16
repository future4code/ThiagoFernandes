import React from "react"
import styled from "styled-components"
import axios from "axios"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
////////////////////////////////////////////////////////////////////////////////////

export class Cadastrar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
    }
  }

  salvaNome = (event) => {
    this.setState({name: event.target.value})
  }

  salvaEmail = (event) => {
    this.setState({email: event.target.value})
  }

  novoUsuario = () => {
    const name = this.state.name
    const email = this.state.email
    this.props.criarUsuarios(name, email);
    console.log(name)
    console.log(email)
  }


  render() {
    return (

      <Wrapper>

        <div>
          <label>Nome:</label>
          <input 
          type="text"
          value={this.state.name}
          onChange={this.salvaNome}
          />
        </div>

        <div>
          <label>E-mail:</label>
          <input 
          type="text"
          value={this.state.email}
          onChange={this.salvaEmail}
          />
        </div>

        <button onClick={this.novoUsuario}>Cadastrar</button>

      </Wrapper>

    );
  }
}

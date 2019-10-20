import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`
const InputName = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  width: 200px;
  height: 20px;
  margin-top: 10px;
  padding-left: 10px;
  outline: none;
`
const InputEmail = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  width: 200px;
  height: 20px;
  margin: 10px;
  margin-bottom: 20px;
  padding-left: 10px;
  outline: none;
`
const BtnCadastrar = styled.button`
  background: #6DABE4;
  border: none;
  width: 210px;
  height: 30px;
  font-weight: bold;
  color: white;

  :hover{
    background: green;
  }
`
const Titulo = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  width: 200px;
  height: 30px;
  color: white;
  background: darkblue;
  padding: 5px;
  border-radius: 20px 20px 0 0;
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
    this.setState({ name: event.target.value })
  }

  salvaEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  novoUsuario = () => {
    const name = this.state.name
    const email = this.state.email
    this.props.criarUsuarios(name, email);
  }

  render() {
    return (

      <Wrapper>

        <Titulo>Novo Usuário</Titulo>

        <InputName
          type="text"
          placeholder="Nome"
          value={this.state.name}
          onChange={this.salvaNome}
        />

        <InputEmail
          type="text"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.salvaEmail}
        />

        <BtnCadastrar onClick={this.novoUsuario}>Cadastrar</BtnCadastrar>

      </Wrapper>

    );
  }
}

import React from "react"
import styled from "styled-components"
import { Cadastrar } from "./Cadastrar"
import { Usuarios } from "./Usuarios"
import axios from "axios"

const PaginaAtual = styled.div`
  display: flex;
`
////////////////////////////////////////////////////////////////////////////////////

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paginaAtual: "Cadastrar",
      usuarios: [],
      name: "",
      email: ""
    }
  }

  buscarUsuarios = () => {
    axios
      .get("https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers",
        {
          headers: {
            "api-token": "7a175c559832cbe6db0112d56e63da03"
          }
        })
      .then((response) => {
        this.setState({
          usuarios: response.data.result
        });
        console.log("usuarios buscados com sucesso")
      })
      .catch((error) => {
        //retornando users not found
        console.log("erro no buscar usuarios")
      })
  }

  componentDidMount() {
    this.buscarUsuarios();
  }

  criarUsuarios = (name, email) => {
    const users = {
      name: name,
      email: email,
    }

    axios
      .post(
        "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser",
        users,
        {
          headers: {
            "api-token": "7a175c559832cbe6db0112d56e63da03"
          }
        }
      )
      .then((response) => {
        window.alert("Usuário criado!")
      })
      .catch((error) => {
        window.alert("Mais um erro meu deusssss")
      })
  }

  mudaPagina = () => {
    const paginaAtual = this.state.paginaAtual;
    paginaAtual === "Cadastrar" ? this.setState({ paginaAtual: "Usuarios" }) : this.setState({ paginaAtual: "Cadastrar" })
    console.log("botão muda pagina")
  }

  render() {

    const paginaAtual = this.state.paginaAtual
    const usuarios = this.state.usuarios

    // Botão pra ir/voltar pra pagina inicial e cadastros
    const textoBtn = (
      paginaAtual === "Cadastrar" ?
        "Usuários Cadastrados" : "Tela de Cadastro"
    )

    // Pagina a ser exibida no momento, a depender do botão
    const paginalAtual =
      paginaAtual === "Cadastrar" ?
        (<Cadastrar criarUsuarios={this.criarUsuarios} />) : (<Usuarios usuarios={usuarios} />)


    return (

      <div className="App">

        <button onClick={this.mudaPagina}>
          {textoBtn}
        </button>

        <PaginaAtual>{paginalAtual}</PaginaAtual>

      </div>
    );
  }
}

export default App;

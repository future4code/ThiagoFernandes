import React from "react"
import styled from "styled-components"
import { Cadastrar } from "./Cadastrar"
import { Usuarios } from "./Usuarios"
import axios from "axios"

const WrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PaginaAtual = styled.div`
  display: flex;
`
const BtnUsuarioCadastrado = styled.button`
  background: #6DABE4;
  border: none;
  width: 210px;
  height: 30px;
  font-weight: bold;
  color: white;

  :hover{
    background: darkblue;
  }
`
////////////////////////////////////////////////////////////////////////////////////

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paginaAtual: "Cadastrar",
      usuarios: []
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
        window.location.reload()
      })
      .catch((error) => {
        window.alert("Mais um erro meu deusssss")
      })
  }

  deletaUsuarios = (userId) => {
    axios
      .delete(
        `https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${userId}` ,
        {
          headers: {
            "api-token": "7a175c559832cbe6db0112d56e63da03"
          }
        }
      )
      .then((response) => {
        window.alert("Usuário deletado!")
        window.location.reload()
      })
      .catch((error) => {
        window.alert("Erro ao deletar grrrrr")
      })
  }

  mudaPagina = () => {
    const paginaAtual = this.state.paginaAtual;
    paginaAtual === "Cadastrar" ? this.setState({ paginaAtual: "Usuarios" }) : this.setState({ paginaAtual: "Cadastrar" })
  }

  render() {

    const paginaAtual = this.state.paginaAtual
    const usuarios = this.state.usuarios

    // Botão pra ir/voltar pra pagina inicial e cadastros
    const textoBtn = (
      paginaAtual === "Cadastrar" ?
        "Usuários Cadastrados" : "Voltar"
    )

    // Pagina a ser exibida no momento, a depender do botão
    const paginalAtual =
      paginaAtual === "Cadastrar" ?
        (<Cadastrar criarUsuarios={this.criarUsuarios} />) : (<Usuarios deletaUsuarios={this.deletaUsuarios} usuarios={usuarios} />)


    return (

      <WrapperPage>

        <PaginaAtual>{paginalAtual}</PaginaAtual>

        <BtnUsuarioCadastrado onClick={this.mudaPagina}>
          {textoBtn}
        </BtnUsuarioCadastrado>

      </WrapperPage>
    );
  }
}

export default App;

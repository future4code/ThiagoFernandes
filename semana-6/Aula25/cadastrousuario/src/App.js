import React from "react"
import styled from "styled-components"
import { Cadastrar } from "./Cadastrar"
import { Usuarios } from "./Usuarios"

const PaginaAtual = styled.div`
  display: flex;
`
////////////////////////////////////////////////////////////////////////////////////

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Cadastrar",
      usuarios: []
    }
  }



  render() {

    const currentPage = this.state.currentPage
    const usuarios = this.state.usuarios
    
    // Botão pra ir/voltar pra pagina inicial e cadastros
    const btn = (
      currentPage === "Cadastrar" ?
        "Usuários Cadastrados" : "Cadastrar"
    )

    // Pagina a ser exibida no momento, a depender do botão
    const paginalAtual =
      currentPage === "Cadastrar" ?
        (<Cadastrar />) : (<Usuarios usuarios={usuarios} />)


    return (

      <div className="App">

        <button>
          {btn}
        </button>

        <PaginaAtual>{paginalAtual}</PaginaAtual>

      </div>
    );
  }
}

export default App;

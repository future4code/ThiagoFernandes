import React from 'react';
import styled from 'styled-components'
import { Pergunta1 } from './Pergunta1.js'
import { Pergunta2 } from './Pergunta2.js'
import { Pergunta3 } from './Pergunta3.js'
import { Fim } from './Fim.js'

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

/////////////////////////////////////////////////////////////////////////////////////

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      perguntas: "1"
    }
  }

  onClickFormStart = (testa) => {
    if (testa.escolaridade === "Superior Completo") {
      this.setState({perguntas: "2" })
    } else {
      this.setState({perguntas: "3" })
    }

  }

  onClickFormEnd = () => {
    this.setState({ perguntas: "fim" })
  }

  // Checa a etapa atual e mostra o componente certo
  showPergunta = () => {
    switch (this.state.perguntas) {
      case "1":
        return (<Pergunta1 onClickBtn={this.onClickFormStart} />)
      case "2":
        return (<Pergunta2 onClickBtn={this.onClickFormEnd} />)
      case "3":
        return (<Pergunta3 onClickBtn={this.onClickFormEnd} />)
      case "fim":
        return (<Fim />)
      default:
        return (<Pergunta1 onClickBtn={this.onClickFormStart} />)
    }
  }

  // Exibe a etapa atual
  render = () => {
    return (

      <Wrapper>
        {this.showPergunta()}
      </Wrapper>

    );
  }

}

export default App;

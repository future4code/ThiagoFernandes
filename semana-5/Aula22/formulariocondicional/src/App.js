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
      etapaAtual: "1"
    }
  }

  // Checa a etapa atual e mostra o componente certo
  showPergunta = () => {
    switch(this.state.etapaAtual){ 
      case "1":
        return (<Pergunta1 />)
      case "2":
        return (<Pergunta2 />)
      case "3":
        return (<Pergunta3 />)
      case "final":
        return (<Fim/>)
      default:
        return (<Pergunta1 />)
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

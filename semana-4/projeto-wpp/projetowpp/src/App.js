import React from 'react';
import { Formulario } from './Formulario';
import styled from 'styled-components';


const Principal = styled.div`
  height: 90vh;
  width: 800px;
  border: 1px solid black;
  margin-top: 10px;
  border-radius: 5px;
`
const CaixaDeMensagens = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: #E5DDD5;
`
const TextoNegrito = styled.span`
  font-weight: bold;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const MsgArea = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  flex-wrap: wrap;
  width: fit-content;
  border-radius: 10px;
  margin-top: 10px;
  
`
const MensagemIndividual = styled.li`
  list-style: none;
  margin: 10px;
`
const UsuarioIndiviual = styled.div`
  margin: 0 10px 10px 10px;
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      mensagens: [],

    }
  }

  addMsg = (mensagem) => {
    this.setState(
      { mensagens: [...this.state.mensagens, mensagem] }
    )
  }


  render() {

    const listaDeMensagens = this.state.mensagens.map(
      (mensagem, index) => {
      return <MsgArea key={index}>
                <MensagemIndividual>
                  <TextoNegrito>{mensagem.nomeusuario}</TextoNegrito>
                </MensagemIndividual>
                <UsuarioIndiviual>
                {mensagem.msgusuario}
                  </UsuarioIndiviual>
             </MsgArea>
      }
    )

    return (

      <Wrapper>
        <Principal>

          <CaixaDeMensagens>
            <ul>
              {listaDeMensagens}
            </ul>
          </CaixaDeMensagens>

          <Formulario addMsg={this.addMsg} />


        </Principal>
      </Wrapper>


    );
  }
}

export default App;

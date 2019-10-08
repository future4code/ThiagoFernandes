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
  justify-content: flex-start;
  background: darkblue;
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
const UsuarioIndiviual = styled.div`
  margin: 0 10px 10px 10px;
`



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tarefas: [],

    }
  }

  // ------- Pegar a mensagem e colocar no array ------- //
  addMsg = (mensagem) => {
    this.setState(
      { tarefas: [...this.state.tarefas, mensagem] }
    )
  }


  render() {

    // ------- Criar a área onde será exibida a lista com todas ------- //
    const listaDeMensagens = this.state.tarefas.map(
      (mensagem, index) => {
        return <MsgArea key={index}>
          <UsuarioIndiviual>
            {mensagem.msgusuario}
          </UsuarioIndiviual>
        </MsgArea>
      }
    )

    return (

      <Wrapper>

        <Principal>

          <Formulario addMsg={this.addMsg} />

          <CaixaDeMensagens>
            <ul>
              {listaDeMensagens}
            </ul>
          </CaixaDeMensagens>




        </Principal>
      </Wrapper>


    );
  }
}

export default App;
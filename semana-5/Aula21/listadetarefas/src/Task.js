import React from 'react';
import styled from 'styled-components'

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const MessageBox = styled.div`
  height: 100%;
  margin: 10px;
  padding: 5px 10px 10px 5px;
  border-radius: 5px;
  width: fit-content;
  background-color: white;
  box-shadow: 0 1px 0.5px rgba(0,0,0,.13);
`
////////////////////////////////////////////////////////////////////////////////


export class Task extends React.Component {


  // ---------- Deletar tarefa no clique duplo ---------- //
  onDoubleClick = () => {
    if (window.confirm('Deletar essa tarefa?')) {
      this.props.deleteMessage(this.props.tarefa)
    }
  }

  render() {

    return (

      <MessageContainer onDoubleClick={this.onDoubleClick}>

        <MessageBox>
          {this.props.tarefa.text}
        </MessageBox>

      </MessageContainer>
    );
  }
}
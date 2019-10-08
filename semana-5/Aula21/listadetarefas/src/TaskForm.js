import React from 'react';
import styled from 'styled-components'

const MessageFormContainer = styled.form`
  display: flex;
  height: 40px;
  padding: 10px;
`
const TextInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  width: 70%;
  margin-right: 10px;
`
const SendButton = styled.button`
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  width: 25%;
`
////////////////////////////////////////////////////////////////////////////////


export class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textValue: "",
    }
  }


  // ---------- Pega o conteúdo do que foi digitado e salva no textValue ---------- // 
  onChangeText = (event) => {
    this.setState({textValue: event.target.value})
  }

  // ---------- Pega o conteúdo do textValue e adiciona no array ---------- // 
  onSendMessage = (event) => {

    // Evita recarregar a página ao dar o submit
    event.preventDefault()

    // Transforma o conteúdo do textValue em um objeto e salva ele como "text" no objeto
    const message = {
      text: this.state.textValue
    }

    this.props.addTask(message)

    // Limpa o input
    this.setState({textValue: ""})
  }




  render() {
    return (
      <MessageFormContainer onSubmit={this.onSendMessage}>

        <TextInput 
        type="text" 
        placeholder={'Nova tarefa...'} 
        onChange={this.onChangeText}  
        value={this.state.textValue}/>

        <SendButton>Criar!</SendButton>
      </MessageFormContainer>
    );
  }
}
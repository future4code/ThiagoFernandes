import React from 'react';
import styled from 'styled-components';

const ContainerMensagem = styled.div`
    border: 1px solid black;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`

const Usuario = styled.input`
    margin-right: 10px;
    width: 15%;
`    
const Mensagem = styled.input`
    margin-right: 10px;
    width: 70%;
`   
const BotaoEnviar = styled.button`
    margin-right: 10px;
    border-radius: 5px;
`


export class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomeusuario: "",
            msgusuario: "",
        }
    }

    // Pegar valor do input nomeusuario
    saveUserName = (event) => {
        this.setState({nomeusuario: event.target.value})
    }

    // Pegar valor do input msgusuario
    saveMessage = (event) => {
        this.setState({msgusuario: event.target.value})
    }

    // Função pra criar um objeto com nomeusuario + msg usuario
    sendMessage = () =>{
        const mensagem = {
            nomeusuario: this.state.nomeusuario,
            msgusuario: this.state.msgusuario,
        }
        
        this.props.addMsg(mensagem);
        // Console log pra testar se ta pegando direitinho
        console.log(mensagem)

        // Limpar inputs após enviar
        this.setState({nomeusuario: "", msgusuario: ""})
        
    }

    // Função pra enviar msg ao apertar Enter
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.sendMessage();
        }
    }



  render() {

    return (

      <ContainerMensagem>

        <Usuario 
        type="text" 
        placeholder="Usuário"
        onChange={this.saveUserName} 
        value={this.state.nomeusuario}
        />

        <Mensagem 
        type="text" 
        placeholder="Mensagem" 
        onChange={this.saveMessage}
        value={this.state.msgusuario}
        onKeyPress={this.handleKeyPress}
        />

        <BotaoEnviar
        onClick={this.sendMessage}
        >
            Enviar
        </BotaoEnviar>

      </ContainerMensagem>

    );
  }
}
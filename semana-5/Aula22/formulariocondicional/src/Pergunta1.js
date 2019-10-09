import React from 'react'
import { Perguntas } from './Perguntas'
import styled from 'styled-components'

const Etapa1Container = styled.div`
`
const Titulo = styled.h2`
    background: white;
    color: black;
    width: fit-content;
    padding: 5px;
    box-shadow: 2px 2px 1px darkred;
`
const Pergunta1Btn = styled.button`
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 15px;
  height: 30px;
  width: 100px;
  background: gray;
  color: white;
  font-weight: bold;
  box-shadow: 2px 2px 1px black;
`

/////////////////////////////////////////////////////////////////////////////////////

export class Pergunta1 extends React.Component {
    constructor(props) {
        super(props)
        this.nome = ""
        this.idade = ""
        this.email = ""
        this.escolaridade = ""
    }
    
    newName = (nome) => {this.nome = nome}
    newAge = (idade) => {this.idade = idade}
    newEmail = (email) => {this.email = email}
    newStudy = (escolaridade) => {this.escolaridade = escolaridade}

    onClickBtnContinue = () => {
        this.props.onClickBtn({
            nome: this.nome,
            idade: this.idade,
            email: this.email,
            // ACHO que não ta pegando a escolaridade aqui? se eu mudar manualmente pra "Superior Completo" ela funciona, 
            // mas se eu deixar o this.escolaridade ele não vai, wtf
            escolaridade: this.escolaridade
        })

    }


    render = () => {
        return (

            <Etapa1Container>
                <Titulo>VAMOS FALAR DE VOCÊ?</Titulo>

                <Perguntas
                    onChange={this.newName}
                    titulo={"Insira seu nome"}
                />
                <Perguntas
                    onChange={this.newAge}
                    titulo={"Insira sua idade"}
                />
                <Perguntas
                    onChange={this.newEmail}
                    titulo={"Insira seu email"}
                />
                <Perguntas
                    onChange={this.newStudy}
                    titulo={"Qual a sua escolaridade?"}
                    tipo={"select"}
                    opcoes={
                        [
                            "EM Incompleto",
                            "EM Completo",
                            "Superior Cursando",
                            "Superior Completo",
                        ]
                    }
                />
                <Pergunta1Btn onClick={this.onClickBtnContinue} >Continuar</Pergunta1Btn>
            </Etapa1Container>

        )
    }
}
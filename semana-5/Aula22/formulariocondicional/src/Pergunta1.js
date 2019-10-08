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



    onClickBtn = () => { }

    render = () => {
        return (

            <Etapa1Container>

                <Titulo>VAMOS FALAR DE VOCÊ?</Titulo>

                <Perguntas
                    titulo={"Insira seu nome"}
                />

                <Perguntas
                    titulo={"Insira sua idade"}
                />

                <Perguntas
                    titulo={"Insira seu email"}
                />

                <Perguntas
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

                <Pergunta1Btn > Continuar </Pergunta1Btn>

            </Etapa1Container>

        )
    }
}
import React from 'react'
import styled from 'styled-components'
import { Perguntas } from './Perguntas'

const Etapa2Container = styled.div`
`

const Titulo = styled.h2`
    background: white;
    color: black;
    width: fit-content;
    padding: 5px;
    box-shadow: 2px 2px 1px darkred;
`

const Etapa2Botao = styled.button `
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

export class Pergunta2 extends React.Component {


  onClickBtn = () => {}

  render = () => {
    return (
      <Etapa2Container>
        <Titulo>O QUE VOCÊ ESTUDA?</Titulo>
        <Perguntas
          titulo={"Qual curso?"}
        />
        
        <Perguntas
          titulo={"Onde você estuda/estudou?"}
        />
        
        <Etapa2Botao> Finalizar </Etapa2Botao>
      </Etapa2Container>
    )
  }
}
import React from 'react'
import styled from 'styled-components'
import { Perguntas } from './Perguntas'

const Container = styled.div`
`

const Titulo = styled.h2`
    background: white;
    color: black;
    width: fit-content;
    padding: 5px;
    box-shadow: 2px 2px 1px darkred;
`

const Pergunta2Btn = styled.button`
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


    newCurso = (curso) => {this.curso = curso}
    newFaculdade = (faculdade) => {this.faculdade = faculdade}

    onClickBtnContinue = () => {
        if (this.props.onClickBtn) {
            this.props.onClickBtn({
                curso: this.curso,
                faculdade: this.faculdade
            })
        }
    }

    render = () => {
        return (
            <Container>
                <Titulo>O QUE VOCÊ ESTUDA?</Titulo>
                <Perguntas
                    onChange={this.newCurso}
                    titulo={"Qual curso?"}
                />

                <Perguntas
                    onChange={this.newFaculdade}
                    titulo={"Onde você estuda/estudou?"}
                />

                <Pergunta2Btn onClick={this.onClickBtnContinue}> Finalizar </Pergunta2Btn>
            </Container>
        )
    }
}
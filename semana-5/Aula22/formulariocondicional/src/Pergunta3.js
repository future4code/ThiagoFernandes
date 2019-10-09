import React from 'react'
import styled from 'styled-components'
import { Perguntas } from './Perguntas'


const Titulo = styled.h2`
    background: white;
    color: black;
    width: fit-content;
    padding: 5px;
    box-shadow: 2px 2px 1px darkred;
`

const Pergunta3Btn = styled.button`
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

export class Pergunta3 extends React.Component {


    semFaculdade = (semFaculdade) => {this.semFaculdade = semFaculdade}
    cursoExtra = (cursoComplementar) => {this.cursoComplementar = cursoComplementar}

    onClickBtnContinue = () => {
        if (this.props.onClickBtn) {
            this.props.onClickBtn({
                semFaculdade: this.semFaculdade,
                cursoExtra: this.cursoExtra
            })
        }
    }


    render = () => {
        return (

            <div>

                <Titulo>ME CONTA MAIS SOBRE...</Titulo>

                <Perguntas
                    onChange={this.semFaculdade}
                    titulo={"Por que não fez graduação?"}
                />

                <Perguntas
                    onChange={this.cursoExtra}
                    titulo={"Você fez algum curso extracurricular?"}
                    tipo={"selecao"}
                    opcoes={
                        [
                            "Técnico",
                            "Língua Estrangeira",
                            "Nenhum",
                        ]
                    }
                />

                <Pergunta3Btn onClick={this.onClickBtnContinue}>Fim!</Pergunta3Btn>

            </div>

        )
    }
}
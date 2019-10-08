import React from 'react'
import styled from 'styled-components'
import { Perguntas } from './Perguntas'

const Etapa3Container = styled.div`
`

const Titulo = styled.h2`
    background: white;
    color: black;
    width: fit-content;
    padding: 5px;
    box-shadow: 2px 2px 1px darkred;
`

const Etapa3Botao = styled.button`
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


    onClickBtn = () => { }

    render = () => {
        return (

            <Etapa3Container>

                <Titulo>ME CONTA MAIS SOBRE...</Titulo>

                <Perguntas
                    titulo={"Por que não fez graduação?"}
                />

                <Perguntas
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

                <Etapa3Botao>Fim!</Etapa3Botao>

            </Etapa3Container>

        )
    }
}
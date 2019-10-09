import React from 'react'
import styled from 'styled-components'

const PerguntaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  color: white;
  box-shadow: 3px 3px 1px gray;
  margin: 20px;
  width: 800px;
`
const Texto = styled.p`
  margin: 10px;
  font-weight: bold;
`
const PerguntaInput = styled.input`
  width: 50%;
  margin: 10px;
`
const PerguntaSelect = styled.select`
  width: 50%;
  margin: 10px;
`
/////////////////////////////////////////////////////////////////////////////////////

export class Perguntas extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "",
    }
  }

  // Salvar resultado do input
  onInput = (resposta) => {
    this.setState({value: resposta.target.value});
  }

  showQuestion = (titulo) => {
    return (

      <PerguntaContainer>
        <Texto>{titulo}</Texto>
        <PerguntaInput onChange={this.onInput} />
      </PerguntaContainer>

    )
  }


  showSelector = (titulo, opcoes = []) => {
    return (

      <PerguntaContainer>
        <Texto>{titulo}</Texto>
        <PerguntaSelect onChange={this.onInput} >
          
          {
            opcoes.map((opcao) => {
              return <option value={opcao}>{opcao}</option>
            })
          }
        </PerguntaSelect>
      </PerguntaContainer>

    )
  }

  render = () => {

    return this.props.tipo === "select" ? this.showSelector(this.props.titulo, this.props.opcoes) : this.showQuestion(this.props.titulo)

  }
}
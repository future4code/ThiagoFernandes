import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
////////////////////////////////////////////////////////////////////////////////////

export class Cadastrar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      nome: "",
    }
  }


  render() {
    return (

      <Wrapper>

        <div>
          <label>Nome:</label>
          <input type="text"/>
        </div>

        <div>
          <label>E-mail:</label>
          <input type="text"/>
        </div>

        <button>Cadastrar</button>

      </Wrapper>

    );
  }
}

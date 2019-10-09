import React from 'react';
import { Cadastro } from './Cadastro';
import { Extrato } from './Extrato';
import styled from 'styled-components';


/////////////////////////////////////////////////////////////////////////////

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      despesas: []
    }
  }

  addDespesa = (despesa) => {
    this.setState({despesas: [...this.state.despesas, despesa]})
  }

  render() {
    return (
      <div>

        < Cadastro addDespesa={this.addDespesa} />

        < Extrato />

        {
          this.state.despesas.map((despesa, index) => <p key={index}>{despesa.nome} {despesa.valor} {despesa.tipo}</p>)
        }
        
      </div>
    );
  }
}

export default App;

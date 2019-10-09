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

        < Extrato despesas={this.state.despesas} />
          
      </div>
    );
  }
}

export default App;

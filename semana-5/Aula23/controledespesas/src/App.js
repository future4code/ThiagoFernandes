import React from 'react';
import { Cadastro } from './Cadastro';
import { Extrato } from './Extrato';
import styled from 'styled-components';
import { tsMethodSignature } from '@babel/types';


/////////////////////////////////////////////////////////////////////////////


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      despesas: [],
      mostraExtrato: false, 
    }
  }

  

  addDespesa = (despesa) => {
    this.setState({despesas: [...this.state.despesas, despesa]})
  }

  renderExtrato = () => {
    return !this.state.mostraExtrato ? "" : < Extrato despesas={this.state.despesas} />
  }

  showExtrato = () => {
    const mostrar = this.state.mostraExtrato
    this.setState({mostraExtrato: !mostrar})
  }

  render() {
    return (
      <div>

        < Cadastro addDespesa={this.addDespesa} showExtrato={this.showExtrato} mostrar={this.state.mostraExtrato} />

        {this.renderExtrato()}

      </div>
    );
  }
}

export default App;

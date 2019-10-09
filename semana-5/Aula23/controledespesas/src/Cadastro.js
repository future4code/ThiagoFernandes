import React from 'react';
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
`
const FormDespesa = styled.div`
    display: flex;
    align-items: center;
    background: #4FA3D2;
    height: 120px;
    padding: 20px;
`
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const BtnCadastrar = styled.button`
    width: 90px;
    height: 40px;
    margin-bottom: 5px;
`
const BtnExtrato = styled.button`
    width: 90px;
    height: 40px;
    margin-top: 5px;
`
const Input = styled.input`
    margin-left: 10px;
    margin-right: 10px;
    width: 200px;
    height: 20px;
    margin-bottom: 5px;
`
const Select = styled.select`
    margin-left: 10px;
    margin-right: 10px;
    width: 204px;
    height: 30px;
`
const TituloContainer = styled.div`
    height: 70px;
    background: #41CBC7;
    color: white;
`
const Titulo = styled.h3`
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    padding: 15px;
    padding-left: 30px;
`
/////////////////////////////////////////////////////////////////////////////

export class Cadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            valor: "",
            tipo: "",
        }
    }

    onChangeDespesa = (event) => {
        this.setState({ nome: event.target.value })
    }

    onChangeValor = (event) => {
        this.setState({ valor: event.target.value })
    }

    onChangeTipo = (event) => {
        this.setState({ tipo: event.target.value })
    }

    onRegister = () => {
        const despesa = {
            nome: this.state.nome,
            valor: this.state.valor,
            tipo: this.state.tipo,
        }
        console.log(despesa)
        this.props.addDespesa(despesa)

        this.setState({
            nome: "",
            valor: "",
        })
    }

    onClickShowBills = () =>{
        this.props.showExtrato()
    }



    render() {
        return (
            <Wrapper>

                <TituloContainer><Titulo>Cadastrar Despesa</Titulo></TituloContainer>

                <FormDespesa>
                    <InputWrapper>
                        <Input
                            type="text"
                            placeholder="Despesa..."
                            value={this.state.nome}
                            onChange={this.onChangeDespesa}
                        />
                        <Input
                            type="text"
                            placeholder="Valor..."
                            value={this.state.valor}
                            onChange={this.onChangeValor}
                        />
                        <Select onChange={this.onChangeTipo} value={this.state.tipo}>
                            <option value="Comida" > Comida </option>
                            <option value="Viagem"> Viagem </option>
                            <option value="Contas"> Contas </option>
                        </Select>
                    </InputWrapper>
                    <BtnWrapper>
                        <BtnCadastrar onClick={this.onRegister}>Cadastrar</BtnCadastrar>
                        <BtnExtrato onClick={this.onClickShowBills}>Ver Extrato</BtnExtrato>
                    </BtnWrapper>
                </FormDespesa>
            </Wrapper>
        );
    }
}


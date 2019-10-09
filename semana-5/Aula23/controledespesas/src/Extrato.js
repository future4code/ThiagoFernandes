import React from 'react';
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
`
const TituloContainer = styled.div`
    height: 70px;
    background: #595386;
    color: white;
`
const Titulo = styled.h3`
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    padding: 15px;
    padding-left: 30px;
`
const ContainerDespesas = styled.div`
    display: flex;
    align-items: center;
    background: #524364;
    height: 120px;
    padding: 20px;
    color: white;
    height: fit-content;
`
const GastosInfoIndividual = styled.div`
    display: flex;
`
const Negrito = styled.div`
    font-weight: bold;
    margin-right: 5px;
`
const GastosWrapper = styled.div`
    margin-right: 10px;
`

/////////////////////////////////////////////////////////////////////////////


export class Extrato extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Wrapper>
                <TituloContainer><Titulo>Cadastrar Despesa</Titulo></TituloContainer>
                <ContainerDespesas>
                    <div>
                        {this.props.despesas.map((despesa) =>
                            <GastosWrapper>
                                <GastosInfoIndividual><Negrito>Despesa: </Negrito>{despesa.nome}</GastosInfoIndividual>
                                <GastosInfoIndividual><Negrito>Valor: </Negrito>{despesa.valor}</GastosInfoIndividual>
                                <GastosInfoIndividual><Negrito>Tipo: </Negrito>{despesa.tipo}</GastosInfoIndividual>
                                <hr />
                            </GastosWrapper>)}
                    </div>
                </ContainerDespesas>
            </Wrapper>


        );
    }
}


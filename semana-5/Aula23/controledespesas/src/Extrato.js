import React from 'react';
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
`
const Titulo = styled.h3`
    margin-left: 10px;
`
/////////////////////////////////////////////////////////////////////////////

export class Extrato extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Wrapper>

                <Titulo>Despesas</Titulo>

            </Wrapper>
        );
    }
}


import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const InputTxt = styled.input`
  margin: 10px;
  width: 300px;
`
const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 10px;
`

const AppForm = props => {

    return (
      <Wrapper>
        <InputTxt type="text" placeholder="Insira seu nome..."></InputTxt>
        <InputTxt type="text" placeholder="Insira sua idade..."></InputTxt>
        <InputTxt type="text" placeholder="Insira sua profissão..."></InputTxt>
        <InputTxt type="text" placeholder="Insira seu país..."></InputTxt>
        <InputTxt type="text" placeholder="De qual viagem deseja participar?"></InputTxt>
        <InputTxt type="text" placeholder="Por que você é um bom candidato?"></InputTxt>
        <Button>Enviar</Button>
      </Wrapper>
    );
}

function mapDispatchToProps(dispatch) {
  return {
    goToLogin: () => dispatch(push("/login"))
  };
}


export default connect(
  null,
  mapDispatchToProps
)(AppForm);

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
const Select = styled.select`
  margin: 10px;
  width: 300px;
`
const TxtArea = styled.textarea`
  margin: 10px;
  width: 300px;
`
const BtnArea = styled.div`
  display: flex;
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
      <InputTxt type="number" placeholder="Selecione sua idade..."></InputTxt>
      <InputTxt type="text" placeholder="Insira sua profissão..."></InputTxt>
      <Select>
        <option value="">Escolha seu país...</option>
        <option value="Brasil">Brasil</option>
        <option value="EUA">EUA</option>
        <option value="Canada">Canadá</option>
      </Select>
      <Select>
        <option value="">Escolha sua missão...</option>
        <option value="Brasil">Marte</option>
        <option value="EUA">Terra</option>
        <option value="Canada">Plutão</option>
      </Select>
      <TxtArea rows="7" placeholder="Por que você é um bom candidato?"></TxtArea>
      <BtnArea>
        <Button>Enviar</Button>
        <Button onClick={props.goToHomePage}>Voltar</Button>
      </BtnArea>
    </Wrapper>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    goToHomePage: () => dispatch(push("/HomePage"))
  };
}


export default connect(
  null,
  mapDispatchToProps
)(AppForm);

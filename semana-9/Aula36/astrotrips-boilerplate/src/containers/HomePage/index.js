import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const HomePage = props => {

    return (
      <LoginWrapper>
        <Button onClick={props.goToLogin}>Login</Button>
        <Button onClick={props.goToCadastrar}>Cadastrar</Button>
      </LoginWrapper>
    );
}

function mapDispatchToProps(dispatch) {
  return {
    goToLogin: () => dispatch(push("/login")),
    goToCadastrar: () => dispatch(push("/application-form"))
  };
}


export default connect(
  null,
  mapDispatchToProps
)(HomePage);

import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import axios from "axios"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Btn = styled.button`
    width: 150px;
    height: 30px;
`
function buscarViagens() {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/futureX/thiago/trips",
        )
      .then((response) => {
        this.setState({
          viagens: response.data.result
          //checar
        });
        console.log("usuarios buscados com sucesso")
      })
      .catch((error) => {
        console.log("erro no buscar usuarios")
        //checar esse erro
      })
  }

  function componentDidMount() {
    buscarViagens();
  }

  componentDidMount()

const ListTripsPage = props => {

  return (
    <Wrapper>
        <h1>Viagens Cadastradas:</h1>

        <Btn onClick={props.goToHomePage}>Voltar pro Inicio</Btn>
      
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
)(ListTripsPage);

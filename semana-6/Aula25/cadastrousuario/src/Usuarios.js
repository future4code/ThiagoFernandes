import React from "react"
import styled from "styled-components"

const WrapperComponente = styled.div`
  display: flex;
  flex-direction: column;
`
const WrapperUsuarios = styled.ul`
`
const Usuario = styled.li`
  display: flex;
  justify-content: space-between;
  border: none;
  margin-bottom: 10px;
`
const BtnDeleteUser = styled.button`
  background: darkred;
  border: none;
  width: 60px;
  height: 20px;
  margin-left: 10px;
  font-weight: bold;
  color: white;

  :hover{
    background: red;
  }
`
const NomeUsuario = styled.div`
`
const Titulo = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  width: 200px;
  height: 30px;
  color: white;
  background: darkblue;
  padding: 5px;
  border-radius: 20px 20px 0 0;
`
////////////////////////////////////////////////////////////////////////////////////

export class Usuarios extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (

      <WrapperComponente>
        <Titulo>Usuários Cadastrados:</Titulo>

        <WrapperUsuarios>
          {this.props.usuarios.map(usuario => (

            <Usuario key={usuario.id}>

              <NomeUsuario>{usuario.name}</NomeUsuario>
              
              <BtnDeleteUser
                onClick={() => this.props.deletaUsuarios(usuario.id)}>
                Excluir
            </BtnDeleteUser>

            </Usuario>

          ))}
        </WrapperUsuarios>
      </WrapperComponente>

    );
  }
}

import styled from "styled-components";

export const Wrapper = styled.div`
  width:100%;
  height: 60px;
  background: #001244;
  margin: 0;
  padding: 0 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Lista = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  color: white;
  font-weight: bold;

`
export const ListaItem = styled.li`
  margin: 10px;

  :hover{
    color: white;
  }
`